const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export interface CreateInquiryData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export async function submitInquiry(data: CreateInquiryData) {
  const res = await fetch(`${API_URL}/inquiries`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => null);
    throw new Error(err?.message || 'Failed to submit inquiry');
  }

  return res.json();
}
