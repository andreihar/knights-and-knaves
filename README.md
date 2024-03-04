<!-- PROJECT LOGO -->
<div align="center">
  <a href="https://github.com/andreihar/memory-lane">
    <img src="src/assets/logo.png" alt="Logo" width="97" height="80">
  </a>
  
# Memory Lane



<!-- PROJECT SHIELDS -->
[![Contributors][contributors-badge]][contributors]
[![Release][release-badge]][release]
[![Licence][licence-badge]][licence]
[![LinkedIn][linkedin-badge]][linkedin]

**Taiwanese Hokkien transliterator from Chinese characters**

It has methods that allow to customise transliteration and retrieve any necessary information about Taiwanese Hokkien pronunciation.<br />
Includes word tokeniser for Taiwanese Hokkien.

[Report Bug][bug] •
[PyPI][pypi]

</div>



---



<!-- TABLE OF CONTENTS -->
<details open>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#features">Features</a>
      <ul>
        <li>
          <a href="#questions-creation">Questions Creation</a>
          <ul>
            <li><a href="#audio-recorder">Audio Recorder</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li><a href="#install">Install</a></li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li>
          <a href="#converter">Converter</a>
          <ul>
            <li><a href="#system">System</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li><a href="#example">Example</a></li>
    <li><a href="#data">Data</a></li>
    <li><a href="#contributors">Contributors</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
    <li><a href="#licence">Licence</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Memory Lane is the final project created by members of the ItJustWorks team for the course in Introduction to Software Engineering in the Summer semester of 2022. The theme of the course was agile software development in three sprints of the Android mobile application that should enhance the lives of people diagnosed with dementia, particularly the elderly.

### Built With

* [![Firebase][firebase-badge]][firebase]



<!-- FEATURES -->
## Features

### Questions Creation

To modify the quiz, the user needs to provide an image, a video, and five questions for each question set.

<p align="center">
<img src="readme/question_sets_list.jpg" alt="Quesiton Sets List" width="200">
</p>

#### Audio Recorder

Users can upload an audio file from their mobile phone or record it with an in-app audio recorder.

<p align="center">
<img src="readme/audio_option.jpg" alt="Audio Options" width="200">
</p>



<!-- INSTALL -->
## Install

Taibun can be installed from [pypi][pypi]

```bash
$ pip install taibun
```



<!-- USAGE -->
## Usage

### Converter

`Converter` class transliterates the Chinese characters to the chosen transliteration system with parameters specified by the developer. Works for both Traditional and Simplified characters.

```python
# constructor
c = Converter(system, dialect, format, delimiter, sandhi, punctuation)

# transliterate Chinese characters
c.get(input)

# convert Simplified Chinese characters to Traditional Chinese Characters
c.to_traditional(input)
```

#### System

`system` String - system of transliteration.

* `Tailo` (default) - [Tâi-uân Lô-má-jī Phing-im Hong-àn][tailo-wiki]
* `POJ` - [Pe̍h-ōe-jī][poj-wiki]

| text | Tailo   | POJ     |
|------|---------|---------|
| 臺灣 | Tâi-uân | Tâi-oân |



<!-- EXAMPLE -->
## Example

```python
from taibun import Converter, Tokeniser

# System
c = Converter() # Tailo system default
c.get('先生講，學生恬恬聽。')
>> Sian-sinn kóng, ha̍k-sing tiām-tiām thiann.
```



<!-- DATA -->
## Data

- [Dictionary of Frequently-Used Taiwan Minnan][dictionary] (via [moedict-data-twblg][dictionary-via])



<!-- CONTRIBUTORS -->
## Contributors

- Andrei Harbachov ([GitHub][andrei-github] · [LinkedIn][andrei-linkedin])



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

- [MPAndroidChart][androidchart] - used to generate a pie chart for the Randomisation Algorithm analysis



<!-- LICENCE -->
## Licence

Because Taibun is MIT-licensed, any developer can essentially do whatever they want with it as long as they include the original copyright and licence notice in any copies of the source code. Note, that the data used by the package is licensed under a different copyright.

The data is licensed under [CC BY-ND 3.0 TW][distionary-cc]



<!-- MARKDOWN LINKS -->
<!-- Badges and their links -->
[contributors-badge]: https://img.shields.io/badge/Contributors-5-44cc11?style=for-the-badge
[contributors]: #contributors
[release-badge]: https://img.shields.io/github/v/release/andreihar/memory-lane?color=38618c&style=for-the-badge
[release]: https://github.com/andreihar/memory-lane/releases
[licence-badge]: https://img.shields.io/github/license/andreihar/taibun.svg?color=000000&style=for-the-badge
[licence]: LICENSE
[linkedin-badge]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin]: https://www.linkedin.com/in/andrei-harbachov/
[firebase-badge]: https://img.shields.io/badge/Firebase-4c4c4c?style=for-the-badge&logo=firebase&logoColor=23039BE5
[firebase]: https://firebase.google.com/

<!-- Technical links -->
[pypi]: https://pypi.org/project/taibun
[bug]: https://github.com/andreihar/taibun/issues
[dictionary]: https://twblg.dict.edu.tw/holodict_new/
[dictionary-via]: https://github.com/g0v/moedict-data-twblg
[distionary-cc]: https://creativecommons.org/licenses/by-nd/3.0/tw/deed.en
[androidchart]: https://github.com/PhilJay/MPAndroidChart

<!-- Other links -->
[tailo-wiki]: https://en.wikipedia.org/wiki/T%C3%A2i-u%C3%A2n_L%C3%B4-m%C3%A1-j%C4%AB_Phing-im_Hong-%C3%A0n

<!-- Socials -->
[andrei-linkedin]: https://www.linkedin.com/in/andrei-harbachov/
[andrei-github]: https://github.com/andreihar