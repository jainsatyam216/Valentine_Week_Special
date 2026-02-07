import DayTemplate from '../components/DayTemplate';

const TeddyDay = () => {
  return (
    <DayTemplate
      emoji="🧸"
      title="Teddy Day"
      date="10th February"
      gradient="from-orange-300 via-orange-400 to-orange-500"
      quote="You're my favorite cuddle buddy"
      message={`My Cuddly Love,

Just like a teddy bear brings comfort and warmth to a child, you bring peace, happiness, and unconditional love to my life. Your hugs are my safe place, your presence is my comfort zone, and your love is my sanctuary.

A teddy bear is soft and cuddly, but your love is even softer, warmer, and more comforting. When I hold you in my arms, I feel like I'm home - safe, loved, and completely at peace.

You are my teddy bear in human form - always there to comfort me when I'm down, always ready with a warm hug, always bringing a smile to my face, and absolutely adorable in every single way. I could hold you forever and never want to let go.

Here's to all our cuddles, past, present, and future!

Sending you the warmest hugs,
Your eternal cuddle partner 🤗💕`}
      memories={[
        "That perfect rainy day when we cuddled on the couch all afternoon watching movies - it was pure bliss and exactly where I wanted to be!",
        "Watching you fall asleep peacefully in my arms - it's honestly the most beautiful and peaceful moment of my life.",
        "Our silly pillow fort adventures and teddy bear tea parties - we're never too old for fun and childlike joy together!",
        "Every time you hug me, all my worries and stress just disappear. You're my real-life teddy bear and my greatest comfort."
      ]}
      imageNote="Cozy moments together"
    />
  );
};

export default TeddyDay;