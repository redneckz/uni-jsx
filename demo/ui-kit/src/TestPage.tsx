import { JSX } from '@redneckz/uni-jsx';
import { PrimaryButton } from './PrimaryButton';
import { TextBlock } from './TextBlock';

const debugEvent = (_: unknown) => {
  console.log(_);
};

const blocks = [
  {
    key: '72672775-55fb-4e29-b4e5-3979876a2353',
    dark: false,
    primary:
      'Dolore eiusmod ipsum Lorem enim labore quis et velit culpa sunt elit aute qui. Id laborum ea ad magna magna sint aute. Enim eu do officia dolore mollit ullamco occaecat cillum laborum consectetur exercitation. Est duis duis culpa elit ullamco. Tempor aliquip consequat est ex.\r\n',
    secondary:
      'Voluptate occaecat aliqua magna sunt commodo enim duis enim incididunt. Cupidatat ut proident mollit velit proident tempor. Esse deserunt Lorem nisi elit deserunt occaecat do aliqua. Ut laboris laborum qui minim in proident mollit. Amet nostrud excepteur sint ullamco elit velit laborum irure elit est occaecat id occaecat. Proident laborum laborum elit labore. Qui reprehenderit culpa fugiat laborum.\r\n',
    link: 'parkerpate@corecom.com'
  },
  {
    key: '1b9faa8f-2452-4987-b17f-e9edfd49580d',
    dark: true,
    primary:
      'Sit cillum exercitation et anim nisi mollit nulla magna anim exercitation nulla veniam. Ipsum eiusmod labore adipisicing quis velit voluptate anim consectetur veniam Lorem et irure nulla. Occaecat nisi est irure aute esse qui incididunt incididunt minim irure esse in. Aliqua consequat sunt duis non elit sit duis. Esse ex excepteur voluptate nostrud laboris. Deserunt nulla mollit duis aliqua officia sunt nostrud.\r\n',
    secondary:
      'Pariatur nisi est exercitation nisi irure officia anim excepteur magna. Deserunt nulla officia enim aute culpa laboris elit nulla laborum veniam pariatur qui. Commodo culpa aliquip proident duis. Aliqua laboris reprehenderit laborum reprehenderit. Ad culpa amet laborum cupidatat pariatur commodo ullamco sit fugiat. Nulla consectetur velit laborum ex deserunt irure exercitation fugiat duis voluptate veniam culpa.\r\n',
    link: 'parkerpate@corecom.com'
  },
  {
    key: '72f325e9-71c9-49fd-9308-71df6452771a',
    dark: false,
    primary:
      'Tempor minim eu sunt deserunt nisi labore laboris ipsum proident cupidatat. Non velit elit aliquip cupidatat irure ex. Magna consequat exercitation aute mollit est eu ex exercitation magna est occaecat non minim officia. Qui sunt aliquip amet in aliquip consequat occaecat nisi tempor veniam. Veniam sunt laboris anim nostrud culpa consectetur officia consectetur culpa pariatur cillum nostrud. Tempor laboris nulla minim labore do officia aute ullamco minim reprehenderit.\r\n',
    secondary:
      'Labore excepteur ullamco duis ea labore ea irure officia eu deserunt. Ea est est minim ad eiusmod incididunt amet do elit. Ea duis irure irure officia amet Lorem consequat esse proident veniam id adipisicing. Lorem ullamco deserunt elit in nisi enim qui proident esse anim. Magna pariatur deserunt fugiat reprehenderit adipisicing cillum sunt.\r\n',
    link: 'parkerpate@corecom.com'
  },
  {
    key: '44034ead-eaf3-44e5-8c9c-27e3361f9bfd',
    dark: true,
    primary:
      'In anim magna magna ipsum ullamco aliqua sint et ad proident mollit. Tempor aliqua eu in labore quis deserunt aliquip sunt aliquip esse commodo anim. Dolor incididunt cupidatat sit occaecat eu deserunt excepteur eiusmod enim aliquip amet dolor. Mollit reprehenderit proident eiusmod excepteur nostrud commodo ut Lorem aliquip reprehenderit culpa. Eu commodo ea cillum quis aliqua in aliquip.\r\n',
    secondary:
      'Ullamco culpa occaecat aliqua commodo id ex nulla nostrud nisi. Ullamco ipsum fugiat ullamco elit eu. Aliqua occaecat minim enim ipsum ut anim aliquip consectetur. Qui Lorem do cupidatat ut occaecat esse non voluptate culpa ut excepteur sit commodo.\r\n',
    link: 'parkerpate@corecom.com'
  },
  {
    key: '03a85027-7d7c-4564-a767-0e8027a105ca',
    dark: false,
    primary:
      'Sunt nisi consectetur aliquip proident sit eu. Laboris qui do exercitation aliquip in incididunt laborum officia pariatur nisi nulla reprehenderit. Ullamco reprehenderit est duis commodo eu dolor duis nostrud. Aute duis nulla culpa aute officia in culpa laboris irure voluptate. Lorem voluptate culpa anim velit laborum laboris officia consectetur. Aliqua do sunt qui enim incididunt sunt commodo. Ullamco incididunt occaecat commodo ea duis aliqua do mollit eu exercitation cupidatat tempor nisi enim.\r\n',
    secondary:
      'Non sint non magna commodo laboris. Ipsum reprehenderit exercitation consectetur mollit. Laboris reprehenderit quis nulla qui eiusmod mollit magna ullamco laborum eiusmod. Veniam dolor voluptate commodo consectetur veniam ad velit fugiat. Sint officia deserunt Lorem reprehenderit voluptate ad sit cillum voluptate occaecat eu commodo reprehenderit. Sunt mollit fugiat ullamco quis fugiat ex exercitation quis sit laborum excepteur. Irure Lorem nisi ea sit occaecat sint ad nostrud non.\r\n',
    link: 'parkerpate@corecom.com'
  },
  {
    key: 'ef2eb0af-0299-492d-80e3-146c0a9e3838',
    dark: true,
    primary:
      'Nulla culpa ut velit quis in velit nostrud Lorem eiusmod. Sint duis nostrud dolor duis Lorem labore Lorem. Sunt exercitation dolor qui sint. Proident in ex reprehenderit id est non laborum commodo culpa qui do eiusmod sint. Irure sunt do dolore mollit do nostrud sit excepteur in voluptate veniam Lorem adipisicing consectetur. Irure qui mollit culpa deserunt laboris.\r\n',
    secondary:
      'Esse ipsum cupidatat exercitation consectetur consequat ea. Ipsum reprehenderit cillum in fugiat excepteur tempor sunt non velit voluptate. Consequat reprehenderit excepteur officia culpa irure enim elit ipsum consequat ex deserunt veniam ipsum esse. Ullamco eu in elit ut laborum magna mollit. Duis laborum qui aute sunt.\r\n',
    link: 'parkerpate@corecom.com'
  },
  {
    key: '6dd59f6a-8c00-4fe7-bca5-3e0691859c87',
    dark: false,
    primary:
      'Laboris elit fugiat ipsum ea in tempor adipisicing eiusmod. Nisi ut occaecat mollit ut ad quis pariatur est amet mollit sint. Non proident culpa commodo et exercitation. Nisi velit voluptate consequat laborum culpa laboris aliquip ad in nisi. Proident adipisicing nulla Lorem in qui dolore incididunt ex consequat aliquip cillum. Non nisi minim deserunt dolore amet Lorem. Ullamco ea culpa sint ex do pariatur.\r\n',
    secondary:
      'Cupidatat culpa anim qui non ipsum incididunt tempor laborum sunt laborum. Proident in deserunt aute id aute Lorem tempor dolore veniam anim sunt occaecat amet adipisicing. Do voluptate non do dolor id elit mollit aute ex elit fugiat. Consectetur commodo reprehenderit occaecat eu exercitation minim duis magna ea laboris laborum. Aliquip elit reprehenderit elit quis culpa fugiat cillum occaecat.\r\n',
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
  return (
    <section>
      {blocks.map(({ link, ...props }) => (
        <TextBlock {...props} onCite={debugEvent}>
          <cite>{link}</cite>
        </TextBlock>
      ))}
      <PrimaryButton onClick={debugEvent}>Click me</PrimaryButton>
      <div dangerouslySetInnerHTML={{ __html }}></div>
    </section>
  );
});
