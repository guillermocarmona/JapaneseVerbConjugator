export default class jpVerbConjugator {
    constructor(verb, romaji, group) {
        this.verb = verb;
        this.romaji = romaji;
        this.group = group;
    }

    _replaceEndingGodan(verb, x) {

        const g1ending = [
            ['う', 'く', 'ぐ', 'す', 'つ', 'ぬ', 'ぶ', 'む', 'る'],
            ['あ', 'か', 'が', 'さ', 'た', 'な', 'ば', 'ま', 'ら'],
            ['い', 'き', 'ぎ', 'し', 'ち', 'に', 'び', 'み', 'り'],
            ['え', 'け', 'げ', 'せ', 'て', 'ね', 'べ', 'め', 'れ'],
            ['お', 'こ', 'ご', 'そ', 'と', 'の', 'ぼ', 'も', 'ろ'],
            ['わ', 'か', 'が', 'さ', 'た', 'な', 'ば', 'ま', 'ら']
        ];


        try {
            let verbRoot = verb.slice(0, -1);
            let lastCharacter = verb[verb.length - 1];
            let newEnding = g1ending[0].indexOf(lastCharacter) >= 0 ? g1ending[x][g1ending[0].indexOf(lastCharacter)] : '';

            return verbRoot + newEnding;
        } catch (error) {
            console.log('Error in replaceEndingGodan: ', error)
        }
    }

    _replaceEndingGodanRomaji(romaji, x) {
        const g1endingRomaji = ['u', 'a', 'i', 'e', 'o', 'a'];

        try {
            let romajiRoot;

            if (romaji.slice(-3) == 'tsu') {
                romajiRoot = romaji.slice(0, -2);
            } else {
                romajiRoot = romaji.slice(0, -1);
            }


            if (x === 5 && ['a', 'i', 'u', 'e', 'o'].includes(romaji.charAt(romaji.length - 2))) {
                return romajiRoot + 'wa';

            } else {
                return romajiRoot + g1endingRomaji[x];
            }

        } catch (error) {
            console.log('Error in replaceEndingGodanRomaji: ', error);
        }
    }

    _replaceEndingIchidan(verb) {
        try {
            return verb.slice(0, -1);
        } catch (error) {
            console.log('Error in replaceEndingIchidan: ', error)
        }
    }

    _replaceEndingIchidanRomaji(romaji) {
        try {
            return romaji.slice(0, -2);
        } catch (error) {
            console.log('Error in replaceEndingIchidanRomaji: ', error)
        }
    }

    setDefaultForm(verb = this.verb, romaji = this.romaji){
        if(verb == 'です'){
            return {
                verb: 'だ',
                romaji: 'da'
            }
        }else{
            return {
                verb: verb,
                romaji: romaji
            }
        }
    }

    setFormMASU(verb = this.verb, romaji = this.romaji, group = this.group, past = false, negative = false) {

        let conjugatedVerb = '';
        let conjugatedRomaji = '';

        if (verb == 'です') {
            if (!past) {
                if (negative == false) {
                    conjugatedVerb = 'です';
                    conjugatedRomaji = 'desu';
                } else if (negative == true) {
                    conjugatedVerb = 'ではありません/じゃありません';
                    conjugatedRomaji = 'dewa arimasen / ja arimasen';
                } else {
                    console.log('Negative is unselected');
                }
            } else if (past) {
                if (negative == false) {
                    conjugatedVerb = 'でした';
                    conjugatedRomaji = 'deshita';
                } else if (negative == true) {
                    conjugatedVerb = 'ではありませんでした/じゃありませんでした';
                    conjugatedRomaji = 'dewa arimasen deshita / ja arimasen deshita';
                } else {
                    console.log('Negative is unselected');
                }
            } else {
                console.log('Past unselected');
            }
        } else {
            switch (group) {
                case 1:
                    if (past == false) {
                        if (negative == false) {
                            conjugatedVerb = this._replaceEndingGodan(verb, 2) + 'ます';
                            conjugatedRomaji = this._replaceEndingGodanRomaji(romaji, 2) + 'masu';
                        } else if (negative == true) {
                            conjugatedVerb = this._replaceEndingGodan(verb, 2) + 'ません';
                            conjugatedRomaji = this._replaceEndingGodanRomaji(romaji, 2) + 'masen';
                        } else {
                            console.log('Negative is unselected');
                        }
                    } else if (past == true) {
                        if (negative == false) {
                            conjugatedVerb = this._replaceEndingGodan(verb, 2) + 'ます';
                            conjugatedRomaji = this._replaceEndingGodanRomaji(romaji, 2) + 'masu';
                        } else if (negative == true) {
                            conjugatedVerb = this._replaceEndingGodan(verb, 2) + 'ません';
                            conjugatedRomaji = this._replaceEndingGodanRomaji(romaji, 2) + 'masen';
                        } else {
                            console.log('Negative is unselected');
                        }
                    } else {
                        console.log('Past unselected');
                    }
                    break;

                case 2:
                    if (past == false) {
                        if (negative == false) {
                            conjugatedVerb = this._replaceEndingIchidan(verb) + 'ます';
                            conjugatedRomaji = this._replaceEndingIchidanRomaji(romaji) + 'masu';
                        } else if (negative == true) {
                            conjugatedVerb = this._replaceEndingIchidan(verb) + 'ません';
                            conjugatedRomaji = this._replaceEndingIchidanRomaji(romaji) + 'masen';
                        } else {
                            console.log('Negative is unselected');
                        }
                    } else if (past == true) {
                        if (negative == false) {
                            conjugatedVerb = this._replaceEndingIchidan(verb) + 'ました';
                            conjugatedRomaji = this._replaceEndingIchidanRomaji(romaji) + 'mashita';
                        } else if (negative == true) {
                            conjugatedVerb = this._replaceEndingIchidan(verb) + 'ませんでした';
                            conjugatedRomaji = this._replaceEndingIchidanRomaji(romaji) + 'masen deshita';
                        } else {
                            console.log('Negative is unselected');
                        }
                    } else {
                        console.log('Past unselected');
                    }
                    break;

                case 3:
                    if (past == false) {
                        if (negative == false) {
                            if (verb == '来る' || verb == 'くる') {
                                conjugatedVerb = '来ます';
                                conjugatedRomaji = 'kimasu';
                            } else if (verb == 'する') {
                                conjugatedVerb = 'します';
                                conjugatedRomaji = 'shimasu';
                            } else {
                                console.log('Error verb undefined');
                            }
                        } else if (negative == true) {
                            if (verb == '来る' || verb == 'くる') {
                                conjugatedVerb = '来ません';
                                conjugatedRomaji = 'kimasen';
                            } else if (verb == 'する') {
                                conjugatedVerb = 'しません';
                                conjugatedRomaji = 'shimasen';
                            } else {
                                console.log('Error verb undefined');
                            }
                        } else {
                            console.log('Negative is unselected');
                        }
                    } else if (past == true) {
                        if (negative == false) {
                            if (verb == '来る' || verb == 'くる') {
                                conjugatedVerb = '来ました';
                                conjugatedRomaji = 'kimashita';
                            } else if (verb == 'する') {
                                conjugatedVerb = 'しました';
                                conjugatedRomaji = 'shimashita';
                            } else {
                                console.log('Error verb undefined');
                            }
                        } else if (negative == true) {
                            if (verb == '来る' || verb == 'くる') {
                                conjugatedVerb = '来ませんでした';
                                conjugatedRomaji = 'kimasen deshita';
                            } else if (verb == 'する') {
                                conjugatedVerb = 'しませんでした';
                                conjugatedRomaji = 'shimasen seshita';
                            } else {
                                console.log('Error verb undefined');
                            }
                        } else {
                            console.log('Negative is unselected');
                        }
                    } else {
                        console.log('Past unselected');
                    }
                    break;

                default:
                    console.log('Error in Verbal Group');
                    break;
            }
        }

        return {
            verb: conjugatedVerb,
            romaji: conjugatedRomaji
        }
    }

    setFormNAI(verb = this.verb, romaji = this.romaji, group = this.group, past = false) {

        let conjugatedVerb = '';
        let conjugatedRomaji = '';

        if (verb == 'です') {
            if (!past) {
                conjugatedVerb = 'ではない/じゃない';
                conjugatedRomaji = 'dewa nai / ja nai';
            } else if (past) {
                conjugatedVerb = 'ではなかった/じゃなかった';
                conjugatedRomaji = 'dewa nakatta / ja nakatta';
            } else {
                console.log('Past unselected');
            }
        } else {
            switch (group) {
                case 1:
                    if (verb === 'ある') {
                        if (past == false) {
                            conjugatedVerb = 'ない';
                            conjugatedRomaji = 'nai';
                        } else if (past == true) {
                            conjugatedVerb = 'なかった';
                            conjugatedRomaji = 'nakatta';
                        } else {
                            console.log('Past unselected');
                        }

                    } else if (verb === '有る' || verb === '在る') {
                        if (past == false) {
                            conjugatedVerb = '無い';
                            conjugatedRomaji = 'nai';
                        } else if (past == true) {
                            conjugatedVerb = '無かった';
                            conjugatedRomaji = 'nakatta';
                        } else {
                            console.log('Past unselected');
                        }
                    } else {
                        if (past == false) {
                            conjugatedVerb = this._replaceEndingGodan(verb, 5) + 'ない';
                            conjugatedRomaji = this._replaceEndingGodanRomaji(romaji, 5) + 'nai';
                        } else if (past == true) {
                            conjugatedVerb = this._replaceEndingGodan(verb, 5) + 'なかった';
                            conjugatedRomaji = this._replaceEndingGodanRomaji(romaji, 5) + 'nakatta';
                        } else {
                            console.log('Past unselected');
                        }
                    }
                    break;

                case 2:
                    if (past == false) {
                        conjugatedVerb = this._replaceEndingIchidan(verb) + 'ない';
                        conjugatedRomaji = this._replaceEndingIchidanRomaji(romaji) + 'nai';
                    } else if (past == true) {
                        conjugatedVerb = this._replaceEndingGodan(verb, 5) + 'なかった';
                        conjugatedRomaji = this._replaceEndingGodanRomaji(romaji, 5) + 'nakatta';
                    } else {
                        console.log('Past unselected');
                    }
                    break;

                case 3:
                    if (past == false) {
                        if (verb == '来る' || verb == 'くる') {
                            conjugatedVerb = '来ない';
                            conjugatedRomaji = 'konai';
                        } else if (verb == 'する') {
                            conjugatedVerb = 'しない';
                            conjugatedRomaji = 'shinai';
                        } else {
                            console.log('Error verb undefined');
                        }
                    } else if (past == true) {
                        if (verb == '来る' || verb == 'くる') {
                            conjugatedVerb = '来なかった';
                            conjugatedRomaji = 'konakatta';
                        } else if (verb == 'する') {
                            conjugatedVerb = 'しなかった';
                            conjugatedRomaji = 'shinakatta';
                        } else {
                            console.log('Error verb undefined');
                        }
                    } else {
                        console.log('Past unselected');
                    }
                    break;

                default:
                    console.log('Error in Verbal Group');
                    break;
            }
        }

        return {
            verb: conjugatedVerb,
            romaji: conjugatedRomaji
        }
    }

    setFormTE(verb = this.verb, romaji = this.romaji, group = this.group, negative = false) {

        let conjugatedVerb = '';
        let conjugatedRomaji = '';

        if (verb == 'です') {
            if (negative == false) {
                conjugatedVerb = 'で';
                conjugatedRomaji = 'de';
            } else if (negative == true) {
                conjugatedVerb = 'ではなくて/じゃなくて';
                conjugatedRomaji = 'dewa nakute / ja nakute';
            } else {
                console.log('Negative is unselected');
            }
        } else {
            if (negative == false) {
                switch (group) {
                    case 1:
                        //Endings: 
                        const g1EndingTE = [
                            ['う', 'く', 'ぐ', 'す', 'つ', 'ぬ', 'ぶ', 'む', 'る'],
                            ['って', 'いて', 'いで', 'して', 'った', 'んで', 'んで', 'んで', 'って'],
                        ];
                        const g1EndingTERomaji = [
                            ['ku', 'gu', 'su', 'nu', 'bu', 'mu', 'ru'],
                            ['ite', 'ide', 'shite', 'nde', 'nde', 'nde', 'tte']
                        ];

                        if (verb == '行く' || verb == 'いく') {
                            conjugatedVerb = '行って';
                            conjugatedRomaji = 'itte';
                        } else {
                            //Kanji
                            try {
                                const lastCharacter = verb[verb.length - 1];
                                const index = g1EndingTE[0].indexOf(lastCharacter);
                                const newEnding = index >= 0 ? g1EndingTE[1][index] : '';

                                conjugatedVerb = verb.slice(0, -1) + newEnding;

                            } catch (error) {
                                console.log('Error in form TE of Godan Verb: ', error)
                            }
                            //Romaji
                            try {
                                if (romaji.endsWith('u') && ['a', 'i', 'u', 'e', 'o'].includes(romaji.charAt(romaji.length - 2))) {
                                    conjugatedRomaji = romaji.slice(0, -1) + 'tte'
                                } else if (romaji.endsWith('tsu')) {
                                    conjugatedRomaji = romaji.slice(0, -3) + 'tte'
                                } else {
                                    for (let i = 0; i < g1EndingTERomaji[0].length; i++) {
                                        if (romaji.endsWith(g1EndingTERomaji[0][i])) {
                                            conjugatedRomaji = romaji.slice(0, -2) + g1EndingTERomaji[1][i];
                                            break;
                                        }
                                    }
                                }
                            } catch (error) {
                                console.log('Error in form TE of Godan Verb in romaji: ', error)
                            }
                        }

                        break;

                    case 2:
                        conjugatedVerb = verb.slice(0, -1) + 'て';
                        conjugatedRomaji = romaji.slice(0, -2) + 'te';


                        break;

                    case 3:
                        if (verb == '来る' || verb == 'くる') {
                            conjugatedVerb = '来て';
                            conjugatedRomaji = 'kita';
                        } else if (verb == 'する') {
                            conjugatedVerb = 'して';
                            conjugatedRomaji = 'shite';
                        } else {
                            console.log('Error verb undefined');
                        }

                        break;

                    default:
                        console.log('Error in Verbal Group');
                        break;
                }
            } else if (negative == true) {
                conjugatedVerb = this.setFormNAI(verb, romaji, group, false).verb.slice(0, -1) + 'くて';
                conjugatedRomaji = this.setFormNAI(verb, romaji, group, false).romaji.slice(0, -1) + 'kute';
            } else {
                console.log('Negative is unselected');
            }
        }

        return {
            verb: conjugatedVerb,
            romaji: conjugatedRomaji
        }
    }

    setFormTA(verb = this.verb, romaji = this.romaji, group = this.group) {

        let conjugatedVerb = '';
        let conjugatedRomaji = '';

        if (verb == 'です') {
            conjugatedVerb = 'だった';
            conjugatedRomaji = 'datta'
        } else {
            switch (group) {
                case 1:
                    //Endings: 
                    const g1EndingTA = [
                        ['う', 'く', 'ぐ', 'す', 'つ', 'ぬ', 'ぶ', 'む', 'る'],
                        ['った', 'いた', 'いだ', 'した', 'った', 'んだ', 'んだ', 'んだ', 'った'],
                    ];
                    const g1EndingTARomaji = [
                        ['ku', 'gu', 'su', 'nu', 'bu', 'mu', 'ru'],
                        ['ita', 'ida', 'shita', 'nda', 'nda', 'nda', 'tta']
                    ];

                    if (verb == '行く' || verb == 'いく') {
                        conjugatedVerb = '行った';
                        conjugatedRomaji = 'itta';
                    } else {
                        //Kanji
                        try {
                            const lastCharacter = verb[verb.length - 1];
                            const index = g1EndingTA[0].indexOf(lastCharacter);
                            const newEnding = index >= 0 ? g1EndingTA[1][index] : '';

                            conjugatedVerb = verb.slice(0, -1) + newEnding;

                        } catch (error) {
                            console.log('Error in form TA of Godan Verb: ', error)
                        }
                        //Romaji
                        try {
                            if (romaji.endsWith('u') && ['a', 'i', 'u', 'e', 'o'].includes(romaji.charAt(romaji.length - 2))) {
                                conjugatedRomaji = romaji.slice(0, -1) + 'tta'
                            } else if (romaji.endsWith('tsu')) {
                                conjugatedRomaji = romaji.slice(0, -3) + 'tta'
                            } else {
                                for (let i = 0; 1 < g1EndingTARomaji[0].length; i++) {
                                    if (romaji.endsWith(g1EndingTARomaji[0][i])) {
                                        conjugatedRomaji = romaji.slice(0, -2) + g1EndingTARomaji[1][i];
                                        break;
                                    }
                                }
                            }
                        } catch (error) {
                            console.log('Error in form Ta of Godan Verb in romaji: ', error)
                        }
                    }

                    break;

                case 2:
                    conjugatedVerb = verb.slice(0, -1) + 'た';
                    conjugatedRomaji = romaji.slice(0, -2) + 'ta';

                    break;

                case 3:
                    if (verb == '来る' || verb == 'くる') {
                        conjugatedVerb = '来た';
                        conjugatedRomaji = 'kita';
                    } else if (verb == 'する') {
                        conjugatedVerb = 'した';
                        conjugatedRomaji = 'shita';
                    } else {
                        console.log('Error verb undefined');
                    }

                    break;

                default:
                    console.log('Error in Verbal Group');
                    break;
            }
        }

        return {
            verb: conjugatedVerb,
            romaji: conjugatedRomaji
        }
    }

    allConjugations(verb = this.verb, romaji = this.romaji, group = this.group) {

        return {
            verb: {
                present: {
                    polite: {
                        positive: this.setFormMASU(verb, romaji, group, false, false).verb,
                        negative: this.setFormMASU(verb, romaji, group, false, true).verb
                    },
                    plain: {
                        positive: this.setDefaultForm(verb, romaji).verb,
                        negative: this.setFormNAI(verb, romaji, group, false).verb
                    }
                },
                past: {
                    polite: {
                        positive: this.setFormMASU(verb, romaji, group, true, false).verb,
                        negative: this.setFormMASU(verb, romaji, group, true, true).verb
                    },
                    plain: {
                        positive: this.setFormTA(verb, romaji, group).verb,
                        negative: this.setFormNAI(verb, romaji, group, true).verb
                    }
                },
                teForm: {
                    positive: this.setFormTE(verb, romaji, group, false).verb,
                    negative: this.setFormTE(verb, romaji, group, true).verb
                }
            },
            romaji: {
                present: {
                    polite: {
                        positive: this.setFormMASU(verb, romaji, group, false, false).romaji,
                        negative: this.setFormMASU(verb, romaji, group, false, true).romaji
                    },
                    plain: {
                        positive: this.setDefaultForm(verb, romaji).romaji,
                        negative: this.setFormNAI(verb, romaji, group, false).romaji
                    }
                },
                past: {
                    polite: {
                        positive: this.setFormMASU(verb, romaji, group, true, false).romaji,
                        negative: this.setFormMASU(verb, romaji, group, true, true).romaji
                    },
                    plain: {
                        positive: this.setFormTA(verb, romaji, group).romaji,
                        negative: this.setFormNAI(verb, romaji, group, true).romaji
                    }
                },
                teForm: {
                    positive: this.setFormTE(verb, romaji, group, false).romaji,
                    negative: this.setFormTE(verb, romaji, group, true).romaji
                }
            }
        }
    }
}