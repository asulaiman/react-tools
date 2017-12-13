import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import {
  withKnobs,
  text,
  boolean,
  number,
  object,
  select
} from '@storybook/addon-knobs'

import { Truncate } from '../src'

export default function() {
  const stories = storiesOf('Truncate', module)
  stories.addDecorator(withKnobs)
  stories
    .addWithInfo('Basic example', () => (
      <div>
        <Truncate>
          "The quick brown fox jumps over the lazy dog" is an English-language
          pangram—a sentence that contains all of the letters of the alphabet.
          It is commonly used for touch-typing practice, testing typewriters and
          computer keyboards, displaying examples of fonts, and other
          applications involving text where the use of all letters in the
          alphabet is desired. Owing to its brevity and coherence, it has become
          widely known.
        </Truncate>
      </div>
    ))
    .addWithInfo('With inline prop', () => (
      <div>
        <Truncate inline>
          "The quick brown fox jumps over the lazy dog" is an English-language
          pangram—a sentence that contains all of the letters of the alphabet.
          It is commonly used for touch-typing practice, testing typewriters and
          computer keyboards, displaying examples of fonts, and other
          applications involving text where the use of all letters in the
          alphabet is desired. Owing to its brevity and coherence, it has become
          widely known.
        </Truncate>
      </div>
    ))
    .addWithInfo('Custom truncate point', () => (
      <div>
        <Truncate inline length={10}>
          "The quick brown fox jumps over the lazy dog" is an English-language
          pangram—a sentence that contains all of the letters of the alphabet.
          It is commonly used for touch-typing practice, testing typewriters and
          computer keyboards, displaying examples of fonts, and other
          applications involving text where the use of all letters in the
          alphabet is desired. Owing to its brevity and coherence, it has become
          widely known.
        </Truncate>
      </div>
    ))
    .addWithInfo('Custom fudge factor', () => (
      <div>
        <Truncate fudgeFactor={1.8}>
          "The quick brown fox jumps over the lazy dog" is an English-language
          pangram—a sentence that contains all of the letters of the alphabet.
          It is commonly used for touch-typing practice, testing typewriters and
          computer keyboards, displaying examples of fonts, and other
          applications involving text where the use of all letters in the
          alphabet is desired. Owing to its brevity and coherence, it has become
          widely known.
        </Truncate>
      </div>
    ))
}
