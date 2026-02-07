import DayTemplate from '../components/DayTemplate';

const ValentineDay = () => {
  return (
    <DayTemplate
      emoji="❤️"
      title="Valentine's Day"
      date="14th February"
      gradient="from-rose via-rose-dark to-purple"
      quote="You are my today and all of my tomorrows"
      message={`My Everything,

Happy Valentine's Day, my love! ❤️

This day is special, but honestly, every single day with you feels like Valentine's Day. You've transformed my ordinary life into an extraordinary adventure filled with love, laughter, joy, and countless beautiful moments that I treasure deeply.

Thank you for being you - for your incredible kindness, your radiant smile, your contagious laughter, your adorable quirks, and absolutely everything that makes you uniquely and wonderfully you. Thank you for choosing me, for loving me unconditionally, for standing by my side through thick and thin, through challenges and celebrations.

You are my best friend, my partner in crime, my comfort during tough times, and my biggest reason to celebrate during happy times. You are my past, my present, and my future. You are my always and forever.

This Valentine's week has been about celebrating different aspects of our beautiful love, but the truth is - my love for you cannot be contained in just one week or even a lifetime. It's eternal, infinite, boundless, and grows stronger with each passing day.

I love you more than words can ever express, more than actions can ever show, and more than you'll ever fully know.

Happy Valentine's Day to the absolute love of my life!

Eternally yours,
Your forever Valentine 💝`}
      memories={[
        "Every single day with you is a cherished memory - from our very first hello to this exact moment right now.",
        "The way you look at me still gives me butterflies and makes my heart race, even after all this beautiful time together.",
        "Building our inside jokes, our special traditions, our little world together - it's my absolute favorite story to tell.",
        "Looking forward to creating an entire lifetime of more incredible memories with you, starting from today and lasting forever.",
        "Thank you for making me believe in forever and happily ever after. With you, I've truly found my fairytale ending.",
        "Here's to us, to our beautiful love, to our journey together, and to all the wonderful tomorrows we'll share side by side!"
      ]}
      imageNote="Our complete journey of love"
    />
  );
};

export default ValentineDay;