import DayTemplate from '../components/DayTemplate';

const PromiseDay = () => {
  return (
    <DayTemplate
      emoji="🤝"
      title="Promise Day"
      date="11th February"
      gradient="from-blue-400 via-blue-500 to-blue-600"
      quote="I promise to love you in every lifetime"
      message={`My Precious One,

Today, I want to make promises that come straight from the deepest part of my heart:

I promise to love you unconditionally, through sunshine and storms, through good times and challenges.

I promise to be your shoulder to cry on, your partner in all adventures, and your biggest supporter in everything you do.

I promise to make you smile and laugh even on your worst days, because seeing you happy is my greatest joy.

I promise to support your dreams as much as I support my own, and to help you achieve everything you desire.

I promise to choose you, every single day, in every situation, no matter what life throws at us.

I promise to grow old with you, creating countless beautiful memories along the way.

These aren't just words - they are the unbreakable foundation of my love for you. Every promise is a piece of my heart that I give to you completely.

Forever committed to us,
Your devoted partner 💙`}
      memories={[
        "The promises we made under the stars on that beautiful night - I remember every single one and I'm keeping them all.",
        "When you promised to always be there for me, and you've kept that promise faithfully every single day since.",
        "Our sacred pinky promises that we never, ever break - they mean the entire world to me.",
        "Every day that you keep your promise of loving me makes me fall even deeper in love with you."
      ]}
      imageNote="Moments of our sacred promises"
    />
  );
};

export default PromiseDay;