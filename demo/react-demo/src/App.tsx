import { TestPage, PrimaryButton, TextBlock } from '@demo/ui-kit';
import { useCallback } from 'react';

export function App() {
  const primary = 'Айзек Азимов';
  const secondary = `Нельзя сказать человеку: «Ты можешь творить.
  Так давай, твори». Гораздо вернее подождать, пока он
  сам не скажет: «Я могу творить, и я буду творить, хотите
  вы этого или нет».`;

  const debugEvent = useCallback((_: unknown) => {
    console.log(_);
  }, []);

  return (
    <>
      <h1>React with unified components</h1>
      <hr />
      <TextBlock primary={primary} secondary={secondary} dark onCite={debugEvent}>
        <cite>http://www.asimovonline.com</cite>
      </TextBlock>
      <PrimaryButton onClick={debugEvent}>Click me</PrimaryButton>
      <hr />
      <TestPage />
    </>
  );
}
