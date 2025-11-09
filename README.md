# 🎙️ EchoText – Real-Time Voice-to-Text Captioning App (MERN + Vosk)

**EchoText** is an efficient, cost-free, and real-time voice-to-text captioning web application built on the **MERN** (MongoDB, Express.js, React.js, Node.js) stack, integrated with the powerful, open-source **Vosk Speech Recognition API**.

This project provides users with an accurate system to convert live voice or audio input into readable text captions in real-time, ideal for accessibility, note-taking, and development.

---

## ✨ Features

* **🎙️ Real-time Voice-to-Text:** Converts live microphone input into text instantly.
* **🧏 Accessibility-Friendly:** Provides immediate captions for the hearing impaired.
* **💾 Save and View Transcripts:** Users can save and retrieve past conversion sessions.
* **🧩 Works Fully Offline:** Utilizes the **Vosk** model for local processing.
* **🔒 No Premium APIs:** Built entirely with open-source tools and requires **no external cloud services**.
* **🌍 Multi-language Support:** Easily integrate different language models from the Vosk repository.

---

## 🏗️ Tech Stack

### Frontend
* **React.js:** For building the dynamic user interface.
* **WebSocket:** Essential for real-time, low-latency data communication.
* **HTML5 Audio APIs:** For capturing microphone input directly from the browser.
* **Tailwind CSS / Material UI:** For a clean and responsive UI design.

### Backend
* **Node.js / Express.js:** The core application server.
* **Vosk Speech Recognition API:** The offline, open-source engine for speech-to-text processing.
* **WebSocket:** Handles the continuous audio stream and real-time text return.
* **Multer (Optional):** To handle file uploads for future audio file support.

### Database
* **MongoDB (MERN):** Used for storing user session data, final transcripts, and application settings.

---

## 🔁 How It Works



1.  **Input:** The user initiates recording and speaks into the browser’s microphone.
2.  **Streaming:** The **React** frontend captures small **audio chunks** and sends them continuously to the **Node.js** server via **WebSocket**.
3.  **Processing:** The backend uses the locally installed **Vosk Speech Recognition model** to convert the streaming speech to text in real-time.
4.  **Output:** The transcribed text is immediately sent back to the frontend using **WebSocket** and displayed as captions.
5.  **Persistence:** The final transcript can be saved to **MongoDB** for later review.

---

## ⚙️ Installation & Setup

### Prerequisites

* **Node.js** (v16+)
* **MongoDB** (Local instance or **Atlas** cloud service)
* **Vosk Model:** Download a model appropriate for your desired language from the [official Vosk repository](https://alphacephei.com/vosk/models).

### Steps (Example)

1.  **Clone the repository:**
    ```bash
    git clone [your-repo-link]
    cd EchoText
    ```
2.  **Install dependencies:**
    ```bash
    # Install server dependencies
    cd server
    npm install

    # Install client dependencies
    cd ../client
    npm install
    ```
3.  **Setup Vosk:** Place your downloaded Vosk language model folder into a designated directory (e.g., `server/vosk-model-en-us`).
4.  **Configure Environment:** Create a `.env` file in the `server` directory and add your MongoDB connection string and other required variables.
5.  **Start the application:**
    ```bash
    # Start the server (from the 'server' directory)
    npm start

    # Start the client (from the 'client' directory)
    npm start
    ```

---

## 🧩 Future Enhancements

* **User Authentication:** Implement secure login/registration for personalized transcript management.
* **Export Functionality:** Allow users to export transcripts as `.txt`, `.pdf`, or other formats.
* **Audio File Uploads:** Support uploading pre-recorded audio files for transcription.
* **Live Translation:** Integrate a translation service (like an open-source NMT model) to provide real-time translated captions.

---

## 🤝 Contribution

Contributions are welcome! Feel free to open an issue or submit a pull request if you have ideas for improvements or bug fixes.