import DayTemplate from '../components/DayTemplate';

const ChocolateDay = () => {
  return (
    <DayTemplate
      emoji="🍫"
      title="Chocolate Day"
      date="9th February"
      gradient="from-amber-700 via-amber-800 to-amber-900"
      quote="You're sweeter than the sweetest chocolate"
      message={`My Sweet Love,

They say chocolate makes everything better, but honestly, you make my life perfect just by being in it. Your love is sweeter than any chocolate, more comforting than any dessert, and more satisfying than anything in this world.

Like chocolate melts in warmth, I melt in your presence. Like chocolate brings instant joy, your smile lights up my entire world. And just like I can never have enough chocolate, I can never have enough of you.

You are the sweetness in my life, the warmth in my heart, and the smile on my face. Thank you for making every single day as sweet and special as this Chocolate Day.

With all the sweetness in my heart,
Your chocolate-loving partner 🍫💕`}
      memories={[
        "That unforgettable time we shared hot chocolate on a cold winter evening and couldn't stop laughing at our chocolate mustaches! Those are the silly moments I treasure most.",
        "Your eyes light up exactly the same way when you see me as when you see chocolate - and honestly, I love that about you!",
        "Remember when we tried to make chocolate together and ended up covered in cocoa powder? It was the messiest and best day ever!",
        "Every chocolate I give you is filled with love, but none are as sweet as the love you give me every single day."
      ]}
      imageNote="Sweet memories together"
    />
  );
};

export default ChocolateDay;