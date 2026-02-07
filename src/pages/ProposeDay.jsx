import DayTemplate from '../components/DayTemplate';

const ProposeDay = () => {
  return (
    <DayTemplate
      emoji="💍"
      title="Propose Day"
      date="8th February"
      gradient="from-yellow-400 via-gold to-amber-500"
      quote="Every day with you is a new reason to say 'I choose you'"
      message={`My Beautiful Soulmate,

Today and every day, I propose to love you more than yesterday. I propose to be your constant support, your biggest cheerleader, and your safe haven through all of life's adventures.

I propose to make you smile even on your worst days, to hold your hand through every challenge, and to celebrate every victory together - big or small.

You are not just my girlfriend; you are my best friend, my partner, my confidant, and the love of my life. If I could propose to you every single day, I would - because choosing you is the easiest and best decision I've ever made.

Will you continue this beautiful journey with me, today and always?

Always and forever,
Your loving partner 💑`}
      memories={[
        "The moment I knew you were the one - it wasn't just one moment, it was every single moment we've spent together that confirmed it.",
        "That unforgettable day when you looked into my eyes and said you loved me too - it remains the best day of my entire life!",
        "Our late-night conversations where we talked about our dreams, our future, and building a life together. Those talks mean everything to me.",
        "Every 'I love you' is a new proposal, and your 'I love you too' is a yes that I will cherish forever and ever."
      ]}
      imageNote="Precious moments of our love story"
    />
  );
};

export default ProposeDay;