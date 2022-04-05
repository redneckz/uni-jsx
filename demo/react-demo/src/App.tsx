import { useRef, useEffect, useCallback } from 'react';
import { TextBlock, PrimaryButton } from '@demo/ui-kit';

export function App() {
  const primary = 'Айзек Азимов';
  const secondary = `Нельзя сказать человеку: «Ты можешь творить.
  Так давай, твори». Гораздо вернее подождать, пока он
  сам не скажет: «Я могу творить, и я буду творить, хотите
  вы этого или нет».`;

  const ref = useRef();
  useEffect(() => {
    console.log(ref.current);
  }, []);

  const debugEvent = useCallback((_: unknown) => {
    console.log(_);
  }, []);

  return (
    <>
      <h1>React with unified components</h1>
      <h2>TextBlock</h2>
      <hr />
      <TextBlock primary={primary} secondary={secondary} onCite={debugEvent}>
        <cite>http://www.asimovonline.com</cite>
      </TextBlock>
      <h2>PrimaryButton</h2>
      <hr />
      <PrimaryButton onClick={debugEvent}>Click me</PrimaryButton>
    </>
  );
}
