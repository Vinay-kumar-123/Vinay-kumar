import { NextResponse } from 'next/server';

// This route is kept as a fallback proxy if you prefer not to call Google Apps Script directly from the client.
// The primary integration uses NEXT_PUBLIC_GOOGLE_SCRIPT_URL in the Contact component.

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic server-side validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    if (!scriptUrl) {
      return NextResponse.json(
        { error: 'Contact service is not configured.' },
        { status: 503 }
      );
    }

    const formData = new FormData();
    formData.append('name', name.trim());
    formData.append('email', email.trim());
    formData.append('subject', subject.trim());
    formData.append('message', message.trim());

    const response = await fetch(scriptUrl, {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    if (result.result === 'success') {
      return NextResponse.json({ success: true });
    }

    throw new Error(result.error || 'Script returned failure');
  } catch (err) {
    console.error('[contact route] Error:', err);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
