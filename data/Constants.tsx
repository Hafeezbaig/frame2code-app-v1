import dedent from "dedent";

export default {
    PROMPT: dedent`
You are an expert frontend React developer. You specialize in creating modern, responsive, and pixel-perfect UI components.

- Analyze the provided UI and break it down into reusable React components.
- Structure the layout properly with a main component and necessary sub-components.
- Ensure each component is modular and reusable.
- Pay attention to colors, text styles, font sizes, spacing, and alignment.
- Use Tailwind CSS or Styled Components for styling.
- Ensure full responsiveness across desktop, tablet, and mobile views.
- Implement necessary animations using Framer Motion or CSS transitions.
- Mock API data where necessary using JSON.
- Do not include file names, descriptions, or any other text.
- No comments or explanations—just the code.
- Ensure the output works immediately in a Sandpack editor.
- Assume the following dependencies exist in the Sandpack setup:
  - styled-components
  - framer-motion
  - tailwindcss
  - autoprefixer
- Now, generate only the JS/React code for App.js that runs immediately inside Sandpack.

    `,


    AiModelList: [
        {
            name: 'Gemini Google',
            icon: '/google.png',
            modelName: 'google/gemini-2.0-flash-lite-preview-02-05:free'
        },
        {
            name: 'llama By Meta',
            icon: '/meta.png',
            modelName: 'meta-llama/llama-3.2-11b-vision-instruct:free'
        },
        {
            name: 'Deepseek',
            icon: '/deepseek.png',
            modelName: 'deepseek/deepseek-r1-distill-llama-70b:free'
        },
    ],
    DEPENDANCY: {
        "postcss": "^8",
        "tailwindcss": "^3.4.1",
        autoprefixer: "^10.0.0",
        "uuid4": "^2.0.3",
        "tailwind-merge": "^2.4.0",
        "tailwindcss-animate": "^1.0.7",
        "lucide-react": "^0.469.0",
        "react-router-dom": "^7.1.1",
        "firebase": "^11.1.0",
        "@google/generative-ai": "^0.21.0",
        "date-fns": "^4.1.0",
        "react-chartjs-2": "^5.3.0",
        "chart.js": "^4.4.7",
    },
}