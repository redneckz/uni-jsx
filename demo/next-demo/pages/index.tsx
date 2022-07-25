import { Counter, PrimaryButton, TestPage, TextBlock } from '@demo/ui-kit';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useCallback } from 'react';
import { contentPageContext } from '../contentPageContext/contentPageContext';

const Home: NextPage = () => {
  const primary = 'Айзек Азимов';
  const secondary = [
    'Нельзя сказать человеку: «Ты можешь творить.',
    'Так давай, твори». Гораздо вернее подождать, пока он',
    'сам не скажет: «Я могу творить, и я буду творить, хотите',
    'вы этого или нет».'
  ];

  const debugEvent = useCallback((_: unknown) => {
    console.log(_);
  }, []);

  return (
    <>
      <Head>
        <title>Demo of unified JSX for Next.js</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Next.js with unified components</h1>
      <hr />
      <TextBlock primary={primary} secondary={secondary} dark onCite={debugEvent}>
        <cite>http://www.asimovonline.com</cite>
      </TextBlock>
      <PrimaryButton onClick={debugEvent}>Click me</PrimaryButton>
      <hr />
      <Counter context={contentPageContext} />
      <hr />
      <TestPage />
    </>
  );
};

export default Home;
