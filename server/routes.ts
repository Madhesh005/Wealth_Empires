import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertNewsletterSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contacts", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.status(201).json({ 
        message: "Contact form submitted successfully", 
        contact: { id: contact.id } 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid contact data", 
          errors: error.errors 
        });
      } else {
        console.error("Contact creation error:", error);
        res.status(500).json({ 
          message: "Failed to submit contact form" 
        });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json({ contacts });
    } catch (error) {
      console.error("Get contacts error:", error);
      res.status(500).json({ 
        message: "Failed to retrieve contacts" 
      });
    }
  });

  // Newsletter subscription
  app.post("/api/newsletters", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      const newsletter = await storage.createNewsletterSubscription(validatedData);
      res.status(201).json({ 
        message: "Successfully subscribed to newsletter", 
        subscription: { id: newsletter.id } 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid email address", 
          errors: error.errors 
        });
      } else if (error instanceof Error && error.message === "Email already subscribed") {
        res.status(409).json({ 
          message: "This email is already subscribed to our newsletter" 
        });
      } else {
        console.error("Newsletter subscription error:", error);
        res.status(500).json({ 
          message: "Failed to subscribe to newsletter" 
        });
      }
    }
  });

  // Get all newsletter subscriptions (for admin purposes)
  app.get("/api/newsletters", async (req, res) => {
    try {
      const subscriptions = await storage.getAllNewsletterSubscriptions();
      res.json({ subscriptions });
    } catch (error) {
      console.error("Get newsletter subscriptions error:", error);
      res.status(500).json({ 
        message: "Failed to retrieve newsletter subscriptions" 
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "healthy", 
      timestamp: new Date().toISOString(),
      service: "Wealth Empires API" 
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
