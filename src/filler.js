let goodEps =
  '20-23, 26-27, 29-44, 46-48, 51-53, 55, 72-88, 113-114, 116-126, 129-143, 152-169, 172-175, 197-212, 214-222, 243-256, 261-270, 272-278, 282-283, 296-302, 321-323, 325-326, 329, 332-337, 339-345, 363-375, 378-384, 387, 391-393, 414-415, 418, 420-421, 424-425, 459, 463, 470, 473-477, 484-500, 1-19, 24-25, 45, 49-50, 54, 56, 89-90, 115, 127-128, 213, 324, 327-328, 330-331, 338, 346, 362, 385-386, 419, 426, 451-458, 460-462, 471-472, 478-479'

goodEps.split(',')

let cleanList = []

goodEps
  .split(',')
  .map(num => num.trim())
  .forEach(numstring => {
    let startNum
    let endNum

    if (numstring.includes('-')) {
      startNum = +numstring.split('-')[0]
      endNum = +numstring.split('-')[1]
    } else {
      startNum = +numstring
      endNum = +numstring
    }
    for (let i = startNum; i <= endNum; i++) {
      cleanList.push({
          episode: i,
          url: `https://www18.naruspot.tv/watch/naruto-shippuden-episode-${i}-subbed/`
      })
    }
  })

console.log(cleanList.sort((a, b) => a.episode - b.episode))

export default cleanList.sort((a, b) => a.episode - b.episode)