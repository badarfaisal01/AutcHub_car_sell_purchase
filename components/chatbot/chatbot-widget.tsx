"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X } from "lucide-react"
import ChatbotInterface from "./chatbot-interface"

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Chat Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-shadow"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-white rounded-lg shadow-2xl border">
          <ChatbotInterface onClose={() => setIsOpen(false)} />
        </div>
      )}
    </>
  )
}
