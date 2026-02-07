import DayTemplate from '../components/DayTemplate';

const KissDay = () => {
  return (
    <DayTemplate
      emoji="💋"
      title="Kiss Day"
      date="13th February"
      gradient="from-pink-400 via-pink-500 to-rose-500"
      quote="Every kiss tells a love story"
      message={`My Sweetest Kiss,

They say a kiss is just a kiss, but they've clearly never experienced the magic of kissing you. Every kiss we share is a moment frozen in time, a promise sealed with love, a memory that lasts forever in my heart.

Your kisses are like pure magic - they make me forget the entire world, lose track of time completely, and feel like I'm floating on clouds in paradise. Whether it's a gentle peck on the forehead, a playful kiss on the nose, or a passionate kiss on the lips, each one carries the full weight of my love for you.

I love the butterflies I still get in my stomach before kissing you. I love how your beautiful smile feels against my lips. I love how a simple kiss from you can instantly change my entire mood and brighten any day.

Here's to a lifetime of stolen kisses and countless magical moments!

Sealed with a kiss,
Forever yours 💕`}
      memories={[
        "Our very first kiss - nervous, sweet, tender, and absolutely perfect in every way. I'll never forget that magical moment.",
        "Kissing in the rain, just like in the romantic movies, but a thousand times better because it was real and it was us.",
        "The sweet goodnight kisses that make me dream of you all night long and wake up with a smile.",
        "Those random, spontaneous kisses when you can't find the right words to express your love - they're honestly my favorite kind."
      ]}
      imageNote="Captured kisses and precious smiles"
    />
  );
};

export default KissDay;