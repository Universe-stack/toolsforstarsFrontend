import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(req: NextRequest) {
    if (req.method !== 'POST') {
        return NextResponse.json({ message: 'Only POST requests are allowed' }, { status: 405 });
    }

    const body = await req.json();
    console.log(body, "body from serverside");

    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
            },
            scopes: [
                'https://www.googleapis.com/auth/cloud-platform',
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        });

        const sheets = google.sheets({ auth, version: 'v4' });

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'A1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [body.name, body.email, body.message] // Ensure the array structure is correct
                ]
            }
        });

        return NextResponse.json({ data: response.data }, { status: 200 }); // Send the response back to the client
    } catch (e: any) {
        console.error(e.message, "error");
        return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
    }
}
