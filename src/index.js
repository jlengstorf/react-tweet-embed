import React, { useEffect, useRef } from 'react';

const parse = twitterLink => {
  if (typeof window === 'undefined' || typeof URL === 'undefined') {
    return {};
  }

  const parsed = new URL(twitterLink);
  if (parsed.host !== 'twitter.com' || !parsed.pathname.includes('status')) {
    return {};
  }

  const [, username, id] = parsed.pathname.match(/\/(\w+?)\/status\/(\d+)\/?/);

  return { username, id };
};

const updateEmbeddedTweet = (url, ref) => {
  const tweet = parse(url);

  if (!tweet.id) {
    return;
  }

  ref.current.innerHTML = '';

  window.twttr && window.twttr.widgets.createTweet(tweet.id, ref.current);
};

const Twitter = ({ url }) => {
  const tweetRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.twttr === 'undefined') {
      const script = document.createElement('script');
      script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
      script.addEventListener('load', () => updateEmbeddedTweet(url, tweetRef));
      document.body.appendChild(script);
    } else {
      updateEmbeddedTweet(url, tweetRef);
    }
  }, [url]);

  return <div ref={tweetRef} />;
};

export default Twitter;
