const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const allowedOrigins = [
  "https://assistment.netlify.app",
  "https://staging-assistment.netlify.app",
];
dotenv.config(); // Load environment variables
const app = express();

// CORS Configuration
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get("/ping", (req, res) => {
  res.json({
    message: "pong",
  });Editing index.js in 0medai
Breadcrumbs0medai/server
/
index.js
in
master

Edit

Preview
Indent mode

Spaces
Indent size

2
Line wrap mode

No wrap
Editing index.js file contents

});

app.post("/chat", async (req, res) => {
  const question = req.body.question.toLowerCase();
  //const question = req.body.question;
  let response;

  if (question.toLowerCase().includes("hello")) {
    //
    response = "Hi there! How can I assist you today?";
  } else if (question.toLowerCase().includes("hi")) {
    response = "Hello there! What do you need assistance with?";
  } else if (question.toLowerCase().includes("hey")) {
    response = "Hey there! What do you need assistance with?";
  } else if (question.toLowerCase().includes("help")) {
    response = "I'm here to help! What do you need assistance with?";
  } else if (question.toLowerCase().includes("bye")) {
    response = "Goodbye! Have a great day!";
  } else if (question.toLowerCase().includes("thanks")) {
    response =
      "You're welcome. If you ever need a hand or have more problem, just give me a shout. I'm here for you.!";
  } else if (question.toLowerCase().includes("depression")) {
    response =
      "Feeling low for a prolonged period could be a sign of depression. It may help to talk to a mental health professional.";
  } else if (question.toLowerCase().includes("depressed")) {
    response =
      "Feeling low for a prolonged period could be a sign of depression. It may help to talk to a mental health professional.";
  } else if (question.toLowerCase().includes("stress")) {
    response =
      "Stress is a common issue. Consider mindfulness exercises or taking short breaks to manage stress better.";
  } else if (question.toLowerCase().includes("self talk")) {
    response =
      "I think you have schizophrenia and it can be managed with antipsychotic medications, which help control symptoms, and cognitive behavioral therapy (CBT) to address distorted thinking and improve coping strategies. Support from family, therapy, and social services is also essential for long-term stability. For more info consult our specialists";
  } else if (question.toLowerCase().includes("selftalk")) {
    response =
      "I think you have schizophrenia and it  can be managed with antipsychotic medications, which help control symptoms, and cognitive behavioral therapy (CBT) to address distorted thinking and improve coping strategies. Support from family, therapy, and social services is also essential for long-term stability. For more info consult our specialists";
  } else if (question.toLowerCase().includes("schizophrenia")) {
    response =
      "Schizophrenia can be managed with antipsychotic medications, which help control symptoms, and cognitive behavioral therapy (CBT) to address distorted thinking and improve coping strategies. Support from family, therapy, and social services is also essential for long-term stability. For more info consult our specialists";
  } else if (question.toLowerCase().includes("delusion")) {
    response =
      "I think you have schizophrenia and it  can be managed with antipsychotic medications, which help control symptoms, and cognitive behavioral therapy (CBT) to address distorted thinking and improve coping strategies. Support from family, therapy, and social services is also essential for long-term stability. For more info consult our specialists";
  } else if (question.toLowerCase().includes("agitation")) {
    response =
      "I think you have schizophrenia and it  can be managed with antipsychotic medications, which help control symptoms, and cognitive behavioral therapy (CBT) to address distorted thinking and improve coping strategies. Support from family, therapy, and social services is also essential for long-term stability. For more info consult our specialists";
  } else if (question.toLowerCase().includes("hallucinations")) {
    response =
      "I think you have schizophrenia and it  can be managed with antipsychotic medications, which help control symptoms, and cognitive behavioral therapy (CBT) to address distorted thinking and improve coping strategies. Support from family, therapy, and social services is also essential for long-term stability. For more info consult our specialists";
  } else if (question.toLowerCase().includes("panic attack")) {
    response =
      "Use deep breathing, grounding techniques, or seek professional therapy (like CBT) to manage panic attacks and try to consult with our specialist as soon as possible.";
  } else if (question.toLowerCase().includes("fear of dying")) {
    response =
      "Use deep breathing, grounding techniques, or seek professional therapy (like CBT) to manage panic attacks and try to consult with our specialist as soon as possible.";
  } else if (question.toLowerCase().includes("palpitations")) {
    response =
      "Use deep breathing, grounding techniques, or seek professional therapy (like CBT) to manage panic attacks and try to consult with our specialist as soon as possible.";
  } else if (question.toLowerCase().includes("rapid heartbeat")) {
    response =
      " Use deep breathing, grounding techniques, or seek professional therapy (like CBT) to manage panic attacks and try to consult with our specialist as soon as possible.";
  } else if (question.toLowerCase().includes("fast heartbeat")) {
    response =
      " Use deep breathing, grounding techniques, or seek professional therapy (like CBT) to manage panic attacks and try to consult with our specialist as soon as possible.";
  } else if (question.toLowerCase().includes("heartbeat")) {
    response =
      "Use deep breathing, grounding techniques, or seek professional therapy (like CBT) to manage panic attacks and try to consult with our specialist as soon as possible. ";
  } else if (question.toLowerCase().includes("arjuna")) {
    response = "A hackathon conducted by NIT-Agaratala in the year 2024 ";
  } else if (question.toLowerCase().includes("shortness of breath")) {
    response =
      " Use deep breathing, grounding techniques, or seek professional therapy (like CBT) to manage panic attacks and try to consult with our specialist as soon as possible.";
  } else if (question.toLowerCase().includes("chest pain")) {
    response =
      "Use deep breathing, grounding techniques, or seek professional therapy (like CBT) to manage panic attacks and try to consult with our specialist as soon as possible. ";
  } else if (question.toLowerCase().includes("panic")) {
    response =
      "Use deep breathing, grounding techniques, or seek professional therapy (like CBT) to manage panic attacks and try to consult with our specialist as soon as possible. ";
  } else if (question.toLowerCase().includes("fear")) {
    response =
      " Use deep breathing, grounding techniques, or seek professional therapy (like CBT) to manage panic attacks and try to consult with our specialist as soon as possible.";
  } else if (question.toLowerCase().includes("ocd")) {
    response =
      "Try Exposure and Response Prevention (ERP) therapy and consider medications like SSRIs to manage OCD symptoms. ";
  } else if (question.toLowerCase().includes("obsession")) {
    response =
      "Try Exposure and Response Prevention (ERP) therapy and consider medications like SSRIs to manage OCD symptoms. ";
  } else if (question.toLowerCase().includes("compulsion")) {
    response =
      " Try Exposure and Response Prevention (ERP) therapy and consider medications like SSRIs to manage OCD symptoms.";
  } else if (question.toLowerCase().includes("Obsessive compulsive disorder")) {
    response =
      " Try Exposure and Response Prevention (ERP) therapy and consider medications like SSRIs to manage OCD symptoms.";
  } else if (question.toLowerCase().includes("flashback")) {
    response =
      " EMDR and trauma-focused CBT are effective therapies for processing and reducing PTSD symptoms. Medication may also be used to alleviate anxiety and depression associated with PTSD.";
  } else if (question.toLowerCase().includes("nightmare")) {
    response =
      "EMDR and trauma-focused CBT are effective therapies for processing and reducing PTSD symptoms. Medication may also be used to alleviate anxiety and depression associated with PTSD. ";
  } else if (question.toLowerCase().includes("hypervigilance")) {
    response =
      "EMDR and trauma-focused CBT are effective therapies for processing and reducing PTSD symptoms. Medication may also be used to alleviate anxiety and depression associated with PTSD. ";
  } else if (question.toLowerCase().includes("emotional numbness")) {
    response =
      " EMDR and trauma-focused CBT are effective therapies for processing and reducing PTSD symptoms. Medication may also be used to alleviate anxiety and depression associated with PTSD.";
  } else if (question.toLowerCase().includes("numbness")) {
    response =
      "EMDR and trauma-focused CBT are effective therapies for processing and reducing PTSD symptoms. Medication may also be used to alleviate anxiety and depression associated with PTSD. ";
  } else if (question.toLowerCase().includes("Exaggerated startle response")) {
    response =
      " EMDR and trauma-focused CBT are effective therapies for processing and reducing PTSD symptoms. Medication may also be used to alleviate anxiety and depression associated with PTSD.";
  } else if (question.toLowerCase().includes("ptsd")) {
    response =
      " EMDR and trauma-focused CBT are effective therapies for processing and reducing PTSD symptoms. Medication may also be used to alleviate anxiety and depression associated with PTSD.";
  } else if (
    question.toLowerCase().includes("Post Traumatic Stress Disorder")
  ) {
    response =
      "EMDR and trauma-focused CBT are effective therapies for processing and reducing PTSD symptoms. Medication may also be used to alleviate anxiety and depression associated with PTSD. ";
  } else if (question.toLowerCase().includes("insomnia")) {
    response =
      " Establish a consistent sleep routine and create a comfortable sleep environment to improve sleep quality. In some cases, consult a healthcare provider for targeted treatments or medications based on the specific sleep disorder.";
  } else if (question.toLowerCase().includes("sleeping problem")) {
    response =
      "Establish a consistent sleep routine and create a comfortable sleep environment to improve sleep quality. In some cases, consult a healthcare provider for targeted treatments or medications based on the specific sleep disorder. ";
  } else if (question.toLowerCase().includes("sleep")) {
    response =
      " Establish a consistent sleep routine and create a comfortable sleep environment to improve sleep quality. In some cases, consult a healthcare provider for targeted treatments or medications based on the specific sleep disorder.";
  } else if (question.toLowerCase().includes("Sleep Apnea")) {
    response =
      "Establish a consistent sleep routine and create a comfortable sleep environment to improve sleep quality. In some cases, consult a healthcare provider for targeted treatments or medications based on the specific sleep disorder. ";
  } else if (question.toLowerCase().includes("Parasomnias")) {
    response =
      "Establish a consistent sleep routine and create a comfortable sleep environment to improve sleep quality. In some cases, consult a healthcare provider for targeted treatments or medications based on the specific sleep disorder. ";
  } else if (question.toLowerCase().includes("Circadian Rhythm Disorders")) {
    response =
      " Establish a consistent sleep routine and create a comfortable sleep environment to improve sleep quality. In some cases, consult a healthcare provider for targeted treatments or medications based on the specific sleep disorder.";
  } else if (question.toLowerCase().includes("Rapid Eye Movement")) {
    response =
      " Establish a consistent sleep routine and create a comfortable sleep environment to improve sleep quality. In some cases, consult a healthcare provider for targeted treatments or medications based on the specific sleep disorder.";
  } else if (question.toLowerCase().includes("Eye Movement")) {
    response =
      "Establish a consistent sleep routine and create a comfortable sleep environment to improve sleep quality. In some cases, consult a healthcare provider for targeted treatments or medications based on the specific sleep disorder. ";
  } else if (question.toLowerCase().includes("sleep cycle")) {
    response =
      " Establish a consistent sleep routine and create a comfortable sleep environment to improve sleep quality. In some cases, consult a healthcare provider for targeted treatments or medications based on the specific sleep disorder.";
  } else if (question.toLowerCase().includes("REM")) {
    response =
      "Establish a consistent sleep routine and create a comfortable sleep environment to improve sleep quality. In some cases, consult a healthcare provider for targeted treatments or medications based on the specific sleep disorder. ";
  } else if (question.toLowerCase().includes("ocd")) {
    response =
      "Try Exposure and Response Prevention (ERP) therapy and consider medications like SSRIs to manage OCD symptoms.";
  } else if (question.toLowerCase().includes("nightmare")) {
    response =
      " EMDR and trauma-focused CBT are effective therapies for processing and reducing PTSD symptoms. Medication may also be used to alleviate anxiety and depression associated with PTSD";
  } else if (question.toLowerCase().includes("Arjuna")) {
    response = "Hackathon conducted by NIT-Agartala in the year 2024  ";
  } else if (question.toLowerCase().includes("ADHD")) {
    response =
      "Behavioral therapy can help develop coping strategies and improve focus, while organizational tools assist with managing tasks and time. Medications like stimulants may also be prescribed to alleviate ADHD symptoms. ";
  } else if (question.toLowerCase().includes("Inattention")) {
    response =
      "Behavioral therapy can help develop coping strategies and improve focus, while organizational tools assist with managing tasks and time. Medications like stimulants may also be prescribed to alleviate ADHD symptoms. ";
  } else if (question.toLowerCase().includes("Hyperactivity")) {
    response =
      "Behavioral therapy can help develop coping strategies and improve focus, while organizational tools assist with managing tasks and time. Medications like stimulants may also be prescribed to alleviate ADHD symptoms. ";
  } else if (question.toLowerCase().includes("attention")) {
    response =
      " Behavioral therapy can help develop coping strategies and improve focus, while organizational tools assist with managing tasks and time. Medications like stimulants may also be prescribed to alleviate ADHD symptoms.";
  } else if (question.toLowerCase().includes("Nausea")) {
    response =
      "It can often be relieved with anti-nausea medications, staying hydrated, and consuming bland foods. ";
  } else if (question.toLowerCase().includes("stomach")) {
    response =
      " It can often be relieved with anti-nausea medications, staying hydrated, and consuming bland foods.";
  } else if (question.toLowerCase().includes("stomach cramps")) {
    response =
      "It can often be relieved with anti-nausea medications, staying hydrated, and consuming bland foods. ";
  } else if (question.toLowerCase().includes("cramps")) {
    response =
      "It can often be relieved with anti-nausea medications, staying hydrated, and consuming bland foods. ";
  } else if (question.toLowerCase().includes("cramp")) {
    response =
      "It can often be relieved with anti-nausea medications, staying hydrated, and consuming bland foods. ";
  } else if (question.toLowerCase().includes("stomach pain")) {
    response =
      "It can often be relieved with anti-nausea medications, staying hydrated, and consuming bland foods to get better digestive system. ";
  } else if (question.toLowerCase().includes("mood")) {
    response =
      "Managing mood swings can involve regular therapy, medication if needed, and lifestyle changes like maintaining a stable routine and practicing stress-reduction techniques try meditation if possible. ";
  } else if (question.toLowerCase().includes("mood off")) {
    response =
      " Managing mood swings can involve regular therapy, medication if needed, and lifestyle changes like maintaining a stable routine and practicing stress-reduction techniques try meditation if possible.";
  } else if (question.toLowerCase().includes("swings")) {
    response =
      "Managing mood swings can involve regular therapy, medication if needed, and lifestyle changes like maintaining a stable routine and practicing stress-reduction techniques try meditation if possible. ";
  } else if (question.toLowerCase().includes("fatigue")) {
    response =
      "Try regular therapy, medication if needed, and lifestyle changes like maintaining a stable routine and practicing stress-reduction techniques try meditation if possible. ";
  } else if (question.toLowerCase().includes("Emotional")) {
    response =
      "If you're too emotional, try practicing mindfulness and self-care techniques to manage your feelings. Regular therapy can also help you explore and address the underlying causes of your emotions. ";
  } else if (question.toLowerCase().includes("low self esteem")) {
    response =
      "To boost self-esteem, engage in positive self-talk, set and achieve small goals, and seek support from therapy or support groups. Practice self-care and focus on your strengths and accomplishments. ";
  } else if (question.toLowerCase().includes("Emotion")) {
    response =
      "If you're feeling too emotional, try practicing mindfulness and self-care techniques to manage your feelings. Regular therapy can also help you explore and address the underlying causes of your emotions. ";
  } else if (question.toLowerCase().includes("moody")) {
    response =
      "To manage moodiness, establish a consistent routine, practice stress-relief techniques like meditation, and consider talking to a therapist for coping strategies. ";
  } else if (question.toLowerCase().includes("underconfident")) {
    response =
      " To boost confidence, engage in positive self-talk, set and achieve small goals, and seek support from therapy or support groups. Practice self-care and focus on your strengths and accomplishments.";
  } else if (question.toLowerCase().includes("confident")) {
    response =
      "To boost confidence,self-esteem, engage in positive self-talk, set and achieve small goals, and seek support from therapy or support groups. Practice self-care and focus on your strengths and accomplishments. ";
  } else if (question.toLowerCase().includes("esteem")) {
    response =
      "To boost self-esteem, engage in positive self-talk, set and achieve small goals, and seek support from therapy or support groups. Practice self-care and focus on your strengths and accomplishments. ";
  } else if (question.toLowerCase().includes("rupam")) {
    response = "Hmmm!!Seems like a smart guy :) ";
  } else if (question.toLowerCase().includes("pritam")) {
    response = "Heyyyy Bonu-man wassup  :) ";
  } else if (question.toLowerCase().includes("low concentration")) {
    response =
      "To improve concentration, establish a structured routine, minimize distractions, use techniques like the Pomodoro Technique for focused work sessions, and practice mindfulness or meditation. ";
  } else if (question.toLowerCase().includes("concentration")) {
    response =
      "To improve concentration, establish a structured routine, minimize distractions, use techniques like the Pomodoro Technique for focused work sessions, and practice mindfulness or meditation. ";
  } else if (question.toLowerCase().includes("mental distancing")) {
    response =
      "try practicing mindfulness to stay connected to the present, engage in activities that foster emotional connections, and consider seeking therapy to address underlying issues and build deeper emotional awareness. ";
  } else if (question.toLowerCase().includes("detachment")) {
    response =
      "try practicing mindfulness to stay connected to the present, engage in activities that foster emotional connections, and consider seeking therapy to address underlying issues and build deeper emotional awareness. ";
  } else if (question.toLowerCase().includes("distance")) {
    response =
      "try practicing mindfulness to stay connected to the present, engage in activities that foster emotional connections, and consider seeking therapy to address underlying issues and build deeper emotional awareness. ";
  } else if (question.toLowerCase().includes("trauma")) {
    response =
      "To deal with trauma, seek professional help through therapies like EMDR or trauma-focused CBT, practice self-care and grounding techniques, and build a support network of trusted friends or support groups ";
  } else if (question.toLowerCase().includes("bpd")) {
    response =
      "Borderline Personality Disorder (BPD) can be managed with Dialectical Behavior Therapy (DBT), which focuses on emotion regulation and interpersonal skills, and may include medications for specific symptoms. ";
  } else if (question.toLowerCase().includes("borderline")) {
    response =
      "Borderline Personality Disorder (BPD) can be managed with Dialectical Behavior Therapy (DBT), which focuses on emotion regulation and interpersonal skills, and may include medications for specific symptoms. ";
  } else if (question.toLowerCase().includes("mpd")) {
    response =
      "Specialized therapy, such as trauma-focused therapy, helps integrate different identities and address trauma. Treatment should be personalized and guided by a mental health professional. ";
  } else if (question.toLowerCase().includes("did")) {
    response =
      "Specialized therapy, such as trauma-focused therapy, helps integrate different identities and address trauma. Treatment should be personalized and guided by a mental health professional. ";
  } else if (
    question.toLowerCase().includes("dissociative identity disorder")
  ) {
    response =
      "Specialized therapy, such as trauma-focused therapy, helps integrate different identities and address trauma. Treatment should be personalized and guided by a mental health professional. ";
  } else if (question.toLowerCase().includes("multiple personality disorder")) {
    response =
      "Specialized therapy, such as trauma-focused therapy, helps integrate different identities and address trauma. Treatment should be personalized and guided by a mental health professional. ";
  } else if (question.toLowerCase().includes("personality disorder")) {
    response =
      "Specialized therapy, such as trauma-focused therapy, helps integrate different identities and address trauma. Treatment should be personalized and guided by a mental health professional. ";
  } else if (question.toLowerCase().includes("personality")) {
    response =
      "Specialized therapy, such as trauma-focused therapy, helps integrate different identities and address trauma. Treatment should be personalized and guided by a mental health professional.";
  } else if (question.toLowerCase().includes("rapid heartbeat")) {
    response =
      " Use deep breathing, grounding techniques, or seek professional therapy (like CBT) to manage panic attacks and try to consult with our specialist as soon as possible.";
  } else if (question.toLowerCase().includes("lonely")) {
    response =
      " I'm sorry to hear that, dear :(  Loneliness can be a tough feeling to handle, but it's okay to feel this way sometimes. I'm here for you.";
  } else if (question.toLowerCase().includes("i love you")) {
    response =
      " Awwwww dear! I love you tooooo, my amazing friend! 🥰 You're the best, and you've totally made my day! Let's keep this awesome vibe going! 💖";
  } else if (question.toLowerCase().includes("love you")) {
    response =
      "  I love you tooooo, dear! 🥰 You're the best, and you've totally made my day! Let's keep this awesome vibe going! 💖";
  } else if (question.toLowerCase().includes("love u")) {
    response =
      " Awwwww dear! I love you tooooo, my amazing friend! 🥰 You're the best, and you've totally made my day! Let's keep this awesome vibe going! 💖";
  } else if (question.toLowerCase().includes("sleep-paralysis")) {
    response =
      "To reduce sleep paralysis, maintain a consistent sleep schedule, manage stress, and try sleeping on your side. Create a calm sleep environment to prevent disruptions, and practice relaxation techniques if episodes occur. If it’s frequent or distressing, consult a doctor for specialized advice.";
  } else if (question.toLowerCase().includes("alone")) {
    response =
      " Ohh dear!I'm sorry to hear that, loneliness can be a tough feeling to handle, but it's okay to feel this way sometimes. I'm here for you.come & hug me first, will feel better! :)";
  } else {
    response =
      "Based on your symptoms, I recommend speaking to one of our specialists for a more detailed assessment.";
  }

  //

  // try {
  //     const response = await openai.completions.create({
  //         model: "gpt-3.5-turbo-instruct",
  //         prompt: question,
  //         max_tokens: 400,
  //         temperature: 0,
  //     });

  //     const answer = response.choices[0]?.text
  //         ?.split("\n")
  //         .filter((value) => value)
  //         .map((value) => value.trim());
  setTimeout(() => {
    // after modification

    res.json({
      answer: response, // after modification
      // answer: answer,            // previous one
      prompt: question,
    });
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ error: "An error occurred" });
    // }

    console.log({ question });
  }, 2000); //after modification
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
