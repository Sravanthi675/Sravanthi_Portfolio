import {
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Send,
    Twitch,
    Twitter,
  } from "lucide-react";
  import { cn } from "@/lib/utils";
  import { useState } from "react";
  
  export const ContactSection = () => {
    

    return (
      <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-primary"> Touch</span>
          </h2>
          <h3 className="text-2xl font-semibold mb-6">
                {" "}
                Contact Information
              </h3>
  
          <div className="grid grid-cols-1 md:grid-cols-4">
            
                <div className="flex space-x-4 justify-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />{" "}
                  </div>
                  <div>
                    <h4 className="font-medium"> Email</h4>
                    <a
                      href="mailto:psravanthi149@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      psravanthi149@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex space-x-4 justify-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />{" "}
                  </div>
                  <div>
                    <h4 className="font-medium"> Phone</h4>
                    <a
                      href="6305382581"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      6305382581
                    </a>
                  </div>
                </div>
                <div className="flex space-x-4 justify-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />{" "}
                  </div>
                  <div>
                    <h4 className="font-medium"> Location</h4>
                    <a className="text-muted-foreground hover:text-primary transition-colors">
                      Hyderabad, India
                    </a>
                  </div>
                </div>
                <div className="flex space-x-4 justify-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />{" "}
                  </div>
                  <div>
                    <h4 className="font-medium">  Connect With Me</h4>
                    <a href="https://www.linkedin.com/in/sravanthi-potharaju-730545147?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                    <Linkedin />
                  </a>
                  </div>
                </div>
  
          </div>
        </div>
      </section>
    );
  };