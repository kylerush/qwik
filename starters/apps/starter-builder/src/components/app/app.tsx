import { component$, $, withStyles$ } from '@builder.io/qwik';
import styles from './app.css';

export const App = component$(() => {
  withStyles$(styles);
  return $(() => (
    <>
      <Header />
      <div id="my-content"></div>
      <Footer />
    </>
  ));
});

export const Header = component$(() => {
  return $(() => (
    <p style={{ 'text-align': 'center' }}>
      <a href="https://github.com/builderio/qwik">
        <img
          alt="Qwik Logo"
          width={400}
          src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F667ab6c2283d4c4d878fb9083aacc10f"
        />
      </a>
    </p>
  ));
});

export const Footer = component$(() => {
  return $(() => (
    <>
      <hr />
      <p style={{ 'text-align': 'center' }}>
        Made with ❤️ by{' '}
        <a target="_blank" href="https://www.builder.io/">
          Builder.io
        </a>
      </p>
    </>
  ));
});
