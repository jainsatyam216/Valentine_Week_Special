import DayTemplate from '../components/DayTemplate';

const RoseDay = () => {
  return (
    <DayTemplate
      emoji="🌹"
      title="Rose Day"
      date="7th February"
      gradient="from-red-400 via-rose to-pink-500"
      quote="Like roses, our love blooms more beautiful each day"
      message={`My Dearest Love,

Just as a rose represents the beauty of nature, you represent the beauty in my life. Every petal of a rose reminds me of the layers of love we share - delicate, beautiful, and eternal.

On this Rose Day, I want you to know that you are the most precious flower in the garden of my life. Your smile is like the morning dew on rose petals, refreshing and bringing joy to my heart.

Thank you for coloring my world with your love, just like roses color a garden. You make every day feel like I'm walking through a field of the most beautiful flowers.

I wish to god bless us with a lifetime of love as beautiful and enduring as a rose garden in full bloom. And also I wish to god give us the fregrance of love that fills our lives with joy and happiness just like the fragrance of roses fills the air with sweetness. And helps us to forget all the pain of prickles of the life like the the rose prickles which I have made in life in last few months.
Forever yours,

With all my love 💕`}
      memories={[
        "Remember our first time when I gave you the rose in the same month of love you wore that beautiful blue-colored top? You looked absolutely stunning and I couldn't take my eyes off you!",
        "That megical time make me realise that you are the only rose which I want to cherish and love for the rest of my life.",
        "Every rose I give you carries a thousand unspoken words of love, admiration, and devotion.",
        "You are the real garden of roses for me which make my life so beautiful and colorful. I want to spend every single day of my life in that garden with you.",
        "The way you smile when I give you a rose is the most beautiful sight in the world to me. It makes my heart skip a beat every single time. I am just waitig for the day when I can give you a rose in person and see that beautiful smile light up your face."
      ]}
      images={[
        "/images/rose/rose1.jpeg",
        "/images/rose/rose2.jpeg",
        "/images/rose/rose3.jpeg",
        "/images/rose/rose4.jpeg"
      ]}
    />
  );
};

export default RoseDay;