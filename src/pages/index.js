import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import '@/styles/globals.css'

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  
  const leads = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'New' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', status: 'Contacted' },
    { id: 3, name: 'John Doe', email: 'john@example.com', status: 'New' },
    { id: 4, name: 'Jane Doe', email: 'jane@example.com', status: 'Contacted' },
    { id: 5, name: 'John Doe', email: 'john@example.com', status: 'New' },
    { id: 6, name: 'Jane Doe', email: 'jane@example.com', status: 'Contacted' },
    { id: 7, name: 'John Doe', email: 'john@example.com', status: 'New' },
    { id: 8, name: 'Jane Doe', email: 'jane@example.com', status: 'Contacted' },
    { id: 9, name: 'John Doe', email: 'john@example.com', status: 'New' },
    { id: 10, name: 'Jane Doe', email: 'jane@example.com', status: 'Contacted' },
    // Add more leads here...
  ];

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-col flex-1 ml-64">
        <Header />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
          <h2 className="text-xl font-bold mb-2">Leads</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">ID</th>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Name</th>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Email</th>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Status</th>
              </tr>
            </thead>
            <tbody>
              {leads.map(lead => (
                <tr key={lead.id} className="hover:bg-grey-lighter">
                  <td className="py-4 px-6 border-b border-grey-light">{lead.id}</td>
                  <td className="py-4 px-6 border-b border-grey-light">{lead.name}</td>
                  <td className="py-4 px-6 border-b border-grey-light">{lead.email}</td>
                  <td className="py-4 px-6 border-b border-grey-light">{lead.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  )
}