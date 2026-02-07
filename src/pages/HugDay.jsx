import DayTemplate from '../components/DayTemplate';

const HugDay = () => {
  return (
    <DayTemplate
      emoji="🤗"
      title="Hug Day"
      date="12th February"
      gradient="from-green-400 via-emerald-500 to-teal-500"
      quote="In your arms, I've found my home"
      message={`My Warm Embrace,

There's something truly magical about your hugs. They have the incredible power to heal my bad days, multiply my joy tenfold, and make everything feel absolutely right in the world.

Your arms are my favorite place to be - they're my sanctuary, my safe space, my comfort zone, and my home. A single hug from you is worth more than a thousand words. It tells me I'm loved, I'm safe, I'm protected, and I'm exactly where I belong.

I love how perfectly we fit together when we embrace, like two puzzle pieces designed by fate just for each other. I love how your hugs make time stand still. I love how even after all this time together, your embrace still makes my heart skip a beat and fills me with warmth.

Sending you the biggest virtual hug until I can hold you in my arms for real!

Wrapped in love,
Your eternal hugger 💚`}
      memories={[
        "Our very first hug - I knew right then in that moment that I never wanted to let you go, and I still feel that way every single time.",
        "That wonderful surprise hug from behind that completely made my entire day perfect and filled me with joy.",
        "Slow dancing together in your arms - it's my absolute favorite kind of dance and my favorite place to be.",
        "The 'welcome home' hugs after a long day that make any hard day completely worthwhile and wash away all the stress."
      ]}
      imageNote="Wrapped in each other's arms"
    />
  );
};

export default HugDay;