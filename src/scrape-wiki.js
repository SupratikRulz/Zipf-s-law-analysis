const fs = require('fs');
const puppeteer = require('puppeteer');
const topics = ['cricket', 'football', 'bollywood', 'hollywood', 'life', 'sex', 'india', 'science', 'existence', 'reality', 'geography', 'history', 'javascript'];


async function scrapeWiki() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  let paragraphs = [],
    wordArr = [],
    curatedWordArr = [],
    paragraph;

  for (let topic of topics) {
    await page.goto(`https://en.wikipedia.org/wiki/${topic}`);
    paragraph = await page.evaluate(() => {
        let result = Array.from(document.querySelectorAll('p')).map((element) => {
            return element.childNodes[0].data
        })
        return result;
    });
    paragraphs = [...paragraphs, ...paragraph];
  }

  paragraphs.forEach((sentence) => {
      (sentence !== null) && (wordArr = [...wordArr, ...sentence.split(' ')]);
  })

  wordArr.forEach(word => {
    const curatedWord = word.replace(/[^A-Za-z]+/g, '').toLowerCase();
    curatedWord && (curatedWordArr = [...curatedWordArr, curatedWord]);
  })

  fs.writeFileSync('src/words.json', JSON.stringify(curatedWordArr, null, 4));
  await browser.close();
  return curatedWordArr;
}

scrapeWiki();
