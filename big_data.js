var fortunes
(function () {
  function wrds(variants) { return variants[Math.round(Math.random() * (variants.length - 1))] + " " }

var action_imperative_verb = wrds([
    "Настройтесь",
    "Нацельтесь",
    // "Накрахмальтесь",
    "Настропалитесь",
])

var characteristic_adjective = wrds([
    "пиздатые",
    "охуительные",
    "выдающиеся",
    "упырительные",
])

var noun_feminine = wrds([
    "волны",
    "взрывы",
    "цунами",
    "волнения",
])

var adjective_characterization = wrds([
    "вселенского",
    "космического",
    "всесветного",
    "всегалактического",
])

var noun_genitive_case = wrds([
    "позитива",
    "веселья",
    "оптимизма",
    "настроения",
])

var adverb = wrds([
    "надо бы",
    "надлежит",
    "пора бы",
    "не мешало бы",
])

var infinitive = wrds([
    "сбросить",
    "стряхнуть",
    "снять",
    "сорвать",
])

var any_noun = wrds([
    "груз",
    "гнёт",
    "тяжесть",
    "багаж",
])

var adjective_what = wrds([
    "житейской",
    "будничной",
    "рутинной",
    "земной",
])

var noun_nominative_genus = wrds([
    "ебанины",
    "хуйни",
    "поебени",
    "рутины",
])

var action_verb = wrds([
    "Потратьте",
    "Растранжирьте",
    "Израсходуйте",
    "Проматайте",
])

var just_noun = wrds([
    "силы",
    "власть",
    "мощь",
    "избытки",
])

var just_adv = wrds([
    "уёбищных",
    "хуиных",
    "отвратительных",
    "триждыёбаных",
])

var genitive = wrds([
    "обрыганов",
    "слоупоков",
    "обсосков",
    "ушлёпков",
])

var love_verb = wrds([
    "Любите",
    "Обоготворяйте",
    "Лелейте",
    "Ублажай",
])

var love_adverb = wrds([
    "вообще",
    "по большому счёту",
    "всегда",
    "в общем",
])

fortunes = [
    function () {
              return action_imperative_verb + 'на' + ' ' +
                      characteristic_adjective + noun_feminine +
                      adjective_characterization + noun_genitive_case + '-' +
                      adverb + infinitive + 'с себя' + ' ' + any_noun +
                      'этой' + ' ' + adjective_what + noun_nominative_genus;
                    },
    function () {
              return action_verb + 'уже' + ' ' +
                      just_noun + 'на себя, а не на' + ' ' + just_adv + genitive +
                      '.' + ' ' +
                      love_verb + 'себя' + ' ' + love_adverb;
                    }
            ]

            Array.prototype.__map = function (fn) {
                var len = this.length, res = Array(len), i
                for (i = 0; i < len; ++i)
                    res[i] = fn(this[i], i, this)
                return res
            }

            Array.prototype.__pop_random = function () {
                var i = Math.floor(Math.random() * this.length)
                var res = this[i]
                this.splice(i, 1)
                return res
            }

            function watch_the_fortune_burn() {
                var _fortunes = fortunes.slice()
                $('#gen').empty().append(Array(1).__map(function () {
                    var headline = _fortunes.__pop_random()
                    if (typeof headline == 'function')
                        headline = headline()
                    return $('<li>').text(headline)
                }))
            }

            $('#btn').click(watch_the_fortune_burn);
            watch_the_fortune_burn()
}())
