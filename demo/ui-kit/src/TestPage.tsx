import { JSX } from '@redneckz/uni-jsx';
import { useCallback, useEffect, useRef, useState } from '@redneckz/uni-jsx/lib/hooks';
import { Counter } from './Counter';
import { Joke } from './Joke';
import { PrimaryButton } from './PrimaryButton';
import { TextBlock } from './TextBlock';

const debugEvent = (_: unknown) => {
  console.log(_);
};

const blocks = [
  {
    key: '72672775-55fb-4e29-b4e5-3979876a2353',
    dark: false,
    primary: 'Dolore eiusmod ipsum Lorem enim labore quis et velit culpa sunt elit aute qui.',
    secondary: [
      'Voluptate occaecat aliqua magna sunt commodo enim duis enim incididunt. Cupidatat ut proident mollit velit proident tempor.'
    ],
    link: 'parkerpate@corecom.com'
  },
  {
    key: '1b9faa8f-2452-4987-b17f-e9edfd49580d',
    dark: true,
    primary: 'Sit cillum exercitation et anim nisi mollit nulla magna anim exercitation nulla veniam.',
    secondary: ['Pariatur nisi est exercitation nisi irure officia anim excepteur magna.'],
    link: 'parkerpate@corecom.com'
  },
  {
    key: '72f325e9-71c9-49fd-9308-71df6452771a',
    dark: false,
    primary:
      'Tempor minim eu sunt deserunt nisi labore laboris ipsum proident cupidatat. Non velit elit aliquip cupidatat irure ex.',
    secondary: [
      'Labore excepteur ullamco duis ea labore ea irure officia eu deserunt. Ea est est minim ad eiusmod incididunt amet do elit.'
    ],
    link: 'parkerpate@corecom.com'
  },
  {
    key: '44034ead-eaf3-44e5-8c9c-27e3361f9bfd',
    dark: true,
    primary:
      'In anim magna magna ipsum ullamco aliqua sint et ad proident mollit. Tempor aliqua eu in labore quis deserunt aliquip sunt...',
    secondary: [
      'Ullamco culpa occaecat aliqua commodo id ex nulla nostrud nisi. Ullamco ipsum fugiat ullamco elit eu.'
    ],
    link: 'parkerpate@corecom.com'
  },
  {
    key: '03a85027-7d7c-4564-a767-0e8027a105ca',
    dark: false,
    primary:
      'Sunt nisi consectetur aliquip proident sit eu. Laboris qui do exercitation aliquip in incididunt laborum officia pariatur nisi...',
    secondary: ['Non sint non magna commodo laboris. Ipsum reprehenderit exercitation consectetur mollit.'],
    link: 'parkerpate@corecom.com'
  },
  {
    key: 'ef2eb0af-0299-492d-80e3-146c0a9e3838',
    dark: true,
    primary:
      'Nulla culpa ut velit quis in velit nostrud Lorem eiusmod. Sint duis nostrud dolor duis Lorem labore Lorem.',
    secondary: [
      'Esse ipsum cupidatat exercitation consectetur consequat ea. Ipsum reprehenderit cillum in fugiat excepteur...'
    ],
    link: 'parkerpate@corecom.com'
  },
  {
    key: '6dd59f6a-8c00-4fe7-bca5-3e0691859c87',
    dark: false,
    primary:
      'Laboris elit fugiat ipsum ea in tempor adipisicing eiusmod. Nisi ut occaecat mollit ut ad quis pariatur est amet mollit sint.',
    secondary: ['Cupidatat culpa anim qui non ipsum incididunt tempor laborum sunt laborum.'],
    link: 'parkerpate@corecom.com'
  }
];

export const TestPage = JSX(() => {
  const __html = `
    <p style="text-align: center">
      © 2022 yoursite.com - All Rights Reserved
    </p>
    <p style="text-align: center">
      Last Updated : 04/09/2022 17:46:14
    </p>
  `;

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log('ref', ref.current);
  }, []);

  const [rnd, setRnd] = useState(0);
  const nextRnd = useCallback(() => {
    setRnd(_ => _ + 1);
  }, []);

  return (
    <section>
      <Counter />
      <hr />
      <PrimaryButton onClick={nextRnd}>Next joke</PrimaryButton>
      <Joke rnd={rnd} />
      <Joke timeout={100} rnd={rnd} />
      <Joke timeout={200} rnd={rnd} />
      <hr />
      {blocks.map(({ link, ...props }) => (
        <TextBlock {...props} onCite={debugEvent}>
          <cite>{link}</cite>
        </TextBlock>
      ))}
      <PrimaryButton onClick={debugEvent}>Click me</PrimaryButton>
      <div ref={ref} dangerouslySetInnerHTML={{ __html }}></div>
    </section>
  );
});
