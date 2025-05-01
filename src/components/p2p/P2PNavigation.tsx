
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface P2PNavigationProps {
  activeTab: string;
}

export function P2PNavigation({ activeTab }: P2PNavigationProps) {
  const tabs = [
    { name: "Express", path: "/express" },
    { name: "P2P", path: "/trade/p2p" },
    { name: "Block", path: "/block" }
  ];

  return (
    <div className="flex space-x-4 mb-6 border-b border-border">
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          to={tab.path}
          className={cn(
            "px-4 py-2 font-medium",
            activeTab === tab.name
              ? "text-primary border-b-2 border-primary"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
}
