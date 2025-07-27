'use client'

import { useEffect } from 'react'
import './Modal.css'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  message: string
  details?: string[]
  icon?: string
}

export default function Modal({ isOpen, onClose, title, message, details = [], icon = "🚀" }: ModalProps) {
  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden' // Prevent background scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close" onClick={onClose}>
          <span>×</span>
        </button>

        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-icon">{icon}</div>
          <h2 className="modal-title">{title}</h2>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <p className="modal-message">{message}</p>
          
          {details.length > 0 && (
            <div className="modal-details">
              <h3 className="details-title">What's Coming Soon:</h3>
              <ul className="details-list">
                {details.map((detail, index) => (
                  <li key={index} className="detail-item">
                    <span className="detail-bullet">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button className="modal-button primary" onClick={onClose}>
            Got it!
          </button>
          <button className="modal-button secondary" onClick={onClose}>
            Stay Updated
          </button>
        </div>
      </div>
    </div>
  )
} 