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
    "приливы",
    "лавины",
])

var adjective_characterization = wrds([
    "вселенского",
    "космического",
    "высшего",
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
    "время",
    "деньги",
    "ништяки",
])

var just_adv = wrds([
    "уёбищных",
    "отсталых",
    "отвратительных",
    "триждыёбаных",
])

var genitive = wrds([
    "обрыганов",
    "обсосков",
    "ушлёпков",
    "ебланов",
])

var love_verb = wrds([
    "Любите",
    "Боготворите",
    "Лелейте",
    "Ублажайте",
])

var love_adverb = wrds([
    "вообще",
    "по большому счёту",
    "всегда",
    "в общем",
])

var noun_one = wrds([
    "Надежды",
    "Иллюзии",
    "Упования",
    "Надюшеньки",
])

var verb_one = wrds([
    "возлагали",
    "накладывали",
    "перекладывали",
    "взваливали",
])

var adjective_one = wrds([
    "некоторых",
    "невесть какой",
    "отдельных",
    "немногих",
    "каких попало",
])

var noun_one_two = wrds([
    "людей",
    "кадров",
    "мирян",
    "людишек",
    "близких",
])

var verb_one_two = wrds([
    "разлетятся",
    "разъебутся",
    "расхуячатся",
    "ебнутся",
    "разобьются",
])

var verb_one_two_three = wrds([
    "вдребезги",
    "в хламину",
    "в дупель",
    "в драбадан",
    "в чистую",
])

var apology = wrds([
    "Соррян",
    "Держитесь там",
    "Здровья вам",
    "Необессудьте",
    "Хоршего настроения",
])

var expression = wrds([
    "бывает и хуже",
    "ещё ничего",
    "не так уж всё отвратительно",
    "хуйня всё",
    "всё не так плохо",
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
                    },
    function () {
              return noun_one + ',' + 'которые вы' + ' ' +
                      verb_one + 'на' + ' ' + adjective_one + noun_one_two + ',' +
                      verb_one_two + verb_one_two_three + '.' + ' ' + apology + ',' + expression;
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
