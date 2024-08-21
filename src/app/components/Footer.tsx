import React from 'react'

interface FooterProps {
  year?: number
  companyName?: string
  extraContent?: React.ReactNode
}

const Footer: React.FC<FooterProps> = ({
  year = 2024,
  companyName = 'My E-Commerce',
  extraContent,
}) => (
  <footer className="bg-gray-800 text-white py-4">
    <div className="container mx-auto px-6 text-center">
      <p>
        © {year} {companyName}. All rights reserved.
      </p>
      {extraContent && <div className="mt-2">{extraContent}</div>}
    </div>
  </footer>
)

export default Footer
