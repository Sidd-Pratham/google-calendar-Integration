# Google Calendar Integration for Event Scheduling 📅

This repository demonstrates how to integrate Google Calendar into a Node.js application. With this setup, you can automate event creation and keep your users on track with scheduled events directly on their Google Calendar. 🚀

Follow the steps below to configure and implement the integration in your own system. 👨‍💻👩‍💻

---

## Table of Contents 📑
1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Setup](#setup)
   - [1. Configure Google Developer Console](#1-configure-google-developer-console)
   - [2. Generate Refresh Token Using Google OAuth 2.0 Playground](#2-generate-refresh-token-using-google-oauth-20-playground)
   - [3. Set Up Project Environment](#3-set-up-project-environment)
4. [Code Overview](#code-overview)
6. [Usage](#usage)

---

## Features ✨
- Automates event creation on Google Calendar for scheduling needs. 
- Ensures secure, OAuth2-based integration for Google Calendar access.
- Enables automatic refresh of access tokens using a refresh token .

## Prerequisites 🛠️
- **Node.js** (v12 or higher) 
- **Google Developer Console Account** 
- Basic knowledge of OAuth2 and REST APIs 

## Setup 📝

### 1. Configure Google Developer Console 🔧

To access Google Calendar API and set up OAuth 2.0 credentials, follow these steps:

1. **Create a new project** in the [Google Developer Console](https://console.cloud.google.com/). 🆕
2. **Enable the Google Calendar API**:
   - Go to the **Library** tab.
   - Search for "Google Calendar API" and click **Enable**.

#### Step 1: OAuth Consent Screen 📝
1. Go to the **OAuth consent screen** tab in the Google Developer Console.
2. Choose **External** as the user type (unless you're building for internal use only).
3. Fill in the following details:
   - **App name**: Choose a name for your app (e.g., "Google Calendar Integration App").
   - **User support email**: Use your email address 📧.
   - **Developer contact email**: Your email address 📧.
4. Click **Save and Continue**. ✅

#### Step 2: Scopes 🌍
1. In the Scopes section, click **Add or Remove Scopes**.
2. Add the necessary scopes:
   - **`https://www.googleapis.com/auth/calendar`** (Full access to Calendar).
   - **`https://www.googleapis.com/auth/calendar.events`** (For event management).
3. Click **Update**. 🔄

#### Step 3: Test Users 👥
1. Add test users who will be able to authorize the app to access their Google Calendar.
2. Under **Test users**, click **Add Users** and enter the email addresses of those you want to test the integration with.

#### Step 4: Summary 📊
1. Review the details on the **Summary** page.
2. Click **Save and Continue** to finalize your OAuth consent screen setup. ✅

### 2. Generate Refresh Token Using Google OAuth 2.0 Playground 🎮

Instead of using code to generate the refresh token, you can use Google’s OAuth 2.0 Playground to easily generate a refresh token. Follow these steps:

1. Open the [OAuth 2.0 Playground](https://developers.google.com/oauthplayground). 🎮
2. In the **OAuth 2.0 Configuration** section, check the box **Use your own OAuth credentials** and fill in your **Client ID** and **Client Secret** (obtained from the Google Developer Console).
3. Click **Step 1**: **Select & Authorize APIs**.
   - In the **Select & Authorize APIs** window, search for "Google Calendar API v3".
   - Under **Calendar API v3**, select the necessary **OAuth Scopes**:
     - **`https://www.googleapis.com/auth/calendar`** (Full access to Calendar).
     - **`https://www.googleapis.com/auth/calendar.events`** (For event management).
4. Click **Authorize APIs**. A popup will appear asking for permission. Allow the necessary permissions. ✔️
5. After successful authorization, click **Exchange authorization code for tokens** (Step 2). 🔄
6. In the **Response** section, you'll see the **Refresh Token**. Copy it for use in your application. 📋

### 3. Set Up Project Environment ⚙️

1. **Clone the repository**:
```bash
   git clone https://github.com/yourusername/google-calendar-integration.git
   cd google-calendar-integration
```
2. **Install dependencies**:
```bash
  npm install
```
3. **Set up environment variables**:
```bash
CLIENT_ID=your_client_id
CLIENT_SECRET=your_client_secret
REDIRECT_URI=http://localhost:3000/oauth2callback
REFRESH_TOKEN=your_generated_refresh_token

```
## Code Overview ✨
Please refer attached typescript file for same

## Usage 🔧
Schedule an event by calling the createEvent function with relevant details such as summary, description, startTime, endTime, and attendees.
Check Google Calendar to verify that the event has been created.


