import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const users=[
    {
      "email": "john.doe@example.com",
      "password": "password123",
      "firstName": "John",
      "lastName": "Doe",
      "type": "user",
      "whatsapp": "+1234567890",
      "phone": "+1234567890",
      "disabled": false,
      "emailVerified": false,
      "isBlocked": false
    },
    {
      "email": "admin.user@example.com",
      "password": "adminPass456",
      "firstName": "Admin",
      "lastName": "User",
      "type": "admin",
      "whatsapp": "+1987654321",
      "phone": "+1987654321",
      "disabled": false,
      "emailVerified": true,
      "isBlocked": false
    },
    {
      "email": "blocked.user@example.com",
      "password": "blockedPass789",
      "firstName": "Blocked",
      "lastName": "User",
      "type": "user",
      "whatsapp": "+1122334455",
      "phone": "+1122334455",
      "disabled": false,
      "emailVerified": true,
      "isBlocked": true
    },
    {
      "email": "disabled.user@example.com",
      "password": "disabledPass321",
      "firstName": "Disabled",
      "lastName": "User",
      "type": "user",
      "whatsapp": "+1223344556",
      "phone": "+1223344556",
      "disabled": true,
      "emailVerified": false,
      "isBlocked": false
    },
    {
      "email": "custom.user@example.com",
      "password": "customPass123",
      "firstName": "Custom",
      "lastName": "User",
      "type": "manager",
      "whatsapp": "+1334455667",
      "phone": "+1334455667",
      "disabled": false,
      "emailVerified": true,
      "isBlocked": false
    }
  ];

  export default function AdminUserPanel() {
      return (
          <div className="w-full p-6 bg-gray-50">
              <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border-separate border-spacing-0 shadow-lg rounded-lg">
                      <thead>
                          <tr className="bg-[#10375C] text-white text-left rounded-t-lg">
                              <th className="px-6 py-3 border-b border-[#001F3F]">Email</th>
                              <th className="px-6 py-3 border-b border-[#001F3F]">First Name</th>
                              <th className="px-6 py-3 border-b border-[#001F3F]">Last Name</th>
                              <th className="px-6 py-3 border-b border-[#001F3F]">WhatsApp</th>
                              <th className="px-6 py-3 border-b border-[#001F3F]">Phone</th>
                              <th className="px-6 py-3 border-b border-[#001F3F]">User Type</th>
                              <th className="px-6 py-3 border-b border-[#001F3F]">Email Verified</th>
                              <th className="px-6 py-3 border-b border-[#001F3F]">Blocked</th>
                          </tr>
                      </thead>
                      <tbody>
                          {users.map((user, index) => {
                              return (
                                  <tr key={index} className="bg-[#F4F6FF] hover:bg-[#F3C623] transition-colors duration-300">
                                      <td className="px-6 py-3 border-b border-[#001F3F] text-[#10375C]">{user.email}</td>
                                      <td className="px-6 py-3 border-b border-[#001F3F] text-[#10375C]">{user.firstName}</td>
                                      <td className="px-6 py-3 border-b border-[#001F3F] text-[#10375C]">{user.lastName}</td>
                                      <td className="px-6 py-3 border-b border-[#001F3F] text-[#10375C]">{user.whatsapp}</td>
                                      <td className="px-6 py-3 border-b border-[#001F3F] text-[#10375C]">{user.phone}</td>
                                      <td className="px-6 py-3 border-b border-[#001F3F] text-[#10375C]">{user.type}</td>
                                      <td className="px-6 py-3 border-b border-[#001F3F] text-center">
                                          {user.emailVerified ? (
                                              <FaCheckCircle className="text-green-500" />
                                          ) : (
                                              <FaTimesCircle className="text-red-500" />
                                          )}
                                      </td>
                                      <td className="px-6 py-3 border-b border-[#001F3F] text-center">
                                          {user.isBlocked ? (
                                              <FaTimesCircle className="text-red-500" />
                                          ) : (
                                              <FaCheckCircle className="text-green-500" />
                                          )}
                                      </td>
                                  </tr>
                              );
                          })}
                      </tbody>
                  </table>
              </div>
          </div>
      );
  }
  