export enum TeaTypes {
    White = 'white',
    Green = 'green',
    Yellow = 'yellow',
    Oolong = 'oolong',
    Black = 'black',
    PuErh = 'puerh',
}

export enum TeaSubtypes {
    Strip = 'strip',
    Ball = 'ball',
    LargeLeaf = 'large leaf',
    SmallLeaf = 'small leaf',
    Raw = 'raw',
    Ripe = 'ripe',
}

export enum BrewingStyles {
    Western = 'western',
    GongFuCha = 'gong fu cha',
}

export function attributesToLowerCase(obj: { [key: string]: any }, attrs: string[]): void {
    attrs.forEach((attr: string) => {
        if (obj.hasOwnProperty(attr) && typeof obj[attr] === 'string') {
            obj[attr] = obj[attr].toLowerCase();
        }
    });
}

/* tslint:disable:max-line-length */
export const messages = {
    badRequest: 'On, no. I seem to have ran into a problem while trying to handle that request.',
    black: {
        largeLeaf: {
            gongFuCha: 'To brew gong fu cha style large leaf black tea: heat water to 95 degrees celcius or 205 degrees fahrenheit, use 4 grams of tea per 100 milliliters of water, steep tea for 15 seconds for fist infusion, adding 5 seconds for each sucessive infusion. You should be able to get 8 or so infusions out of this tea.',
            western: 'To brew western style large leaf black tea: heat water to 95 degrees celcius or 205 degrees fahrenheit, use 0.7 grams of tea per 100 milliliters of water, steep tea for 120 seconds for fist infusion, adding 60 seconds for each sucessive infusion. You should be able to get 4 or so infusions out of this tea.',
        },
        missingSubtype: 'You must provide a tea subtype, like "large leaf" or "small leaf".',
        smallLeaf: {
            gongFuCha: 'To brew gong fu cha style small leaf black tea: heat water to 90 degrees celcius or 195 degrees fahrenheit, use 4.5 grams of tea per 100 milliliters of water, steep tea for 10 seconds for fist infusion, adding 5 seconds for each sucessive infusion. You should be able to get 8 or so infusions out of this tea.',
            western: 'To brew western style small leaf black tea: heat water to 90 degrees celcius or 195 degrees fahrenheit, use 0.8 grams of tea per 100 milliliters of water, steep tea for 120 seconds for fist infusion, adding 60 seconds for each sucessive infusion. You should be able to get 4 or so infusions out of this tea.',
        },
    },
    green: {
        gongFuCha: 'To brew gong fu cha style green tea: heat water to 80 degrees celcius or 175 degrees fahrenheit, use 3 to 3.5 grams of tea per 100 milliliters of water, steep tea for 15 seconds for fist infusion, adding 3 seconds for each sucessive infusion. You should be able to get 5 or so infusions out of this tea.',
        western: 'To brew western style green tea: heat water to 80 degrees celcius or 175 degrees fahrenheit, use 0.5 grams of tea per 100 milliliters of water, steep tea for 120 seconds for fist infusion, adding 60 seconds for each sucessive infusion. You should be able to get 2 or so infusions out of this tea.',
    },
    missingTeaType: 'Missing parameter "teaType". I need that to know what to tell you!',
    oolong: {
        ball: {
            gongFuCha: 'To brew gong fu cha style ball oolong tea: heat water to 99 degrees celcius or 210 degrees fahrenheit, use 6 to 6.5 grams of tea per 100 milliliters of water, steep tea for 25 seconds for fist infusion, adding 5 seconds for each sucessive infusion. You should be able to get 9 or so infusions out of this tea.',
            western: 'To brew western style ball oolong tea: heat water to 99 degrees celcius or 210 degrees fahrenheit, use 1 grams of tea per 100 milliliters of water, steep tea for 120 seconds for fist infusion, adding 30 seconds for each sucessive infusion. You should be able to get 5 or so infusions out of this tea.',
        },
        missingSubtype: 'You must provide a tea subtype, like "stripped" or "balled".',
        strip: {
            gongFuCha: 'To brew gong fu cha style strip oolong tea: heat water to 99 degrees celcius or 210 degrees fahrenheit, use 4.5 to 5 grams of tea per 100 milliliters of water, steep tea for 20 seconds for fist infusion, adding 5 seconds for each sucessive infusion. You should be able to get 9 or so infusions out of this tea.',
            western: 'To brew western style strip oolong tea: heat water to 99 degrees celcius or 210 degrees fahrenheit, use 0.8 grams of tea per 100 milliliters of water, steep tea for 120 seconds for fist infusion, adding 30 seconds for each sucessive infusion. You should be able to get 4 or so infusions out of this tea.',
        },
    },
    puerh: {
        missingSubtype: 'You must provide a tea subtype, like "ripe" or "raw".',
        raw: {
            gongFuCha: 'To brew gong fu cha style raw puerh tea: heat water to 95 degrees celcius or 205 degrees fahrenheit, use 5 grams of tea per 100 milliliters of water, steep tea for 10 seconds for fist infusion, adding 3 seconds for each sucessive infusion. You should be able to get 15 or so infusions out of this tea.',
            western: 'To brew western style raw puerh tea: heat water to 95 degrees celcius or 205 degrees fahrenheit, use 0.9 grams of tea per 100 milliliters of water, steep tea for 120 seconds for fist infusion, adding 30 seconds for each sucessive infusion. You should be able to get 6 or so infusions out of this tea.',
        },
        ripe: {
            gongFuCha: 'To brew gong fu cha style ripe puerh tea: heat water to 99 degrees celcius or 210 degrees fahrenheit, use 5 grams of tea per 100 milliliters of water, steep tea for 10 seconds for fist infusion, adding 5 seconds for each sucessive infusion. You should be able to get 20 or so infusions out of this tea.',
            western: 'To brew western style ripe puerh tea: heat water to 99 degrees celcius or 210 degrees fahrenheit, use 0.9 grams of tea per 100 milliliters of water, steep tea for 120 seconds for fist infusion, adding 30 seconds for each sucessive infusion. You should be able to get 6 or so infusions out of this tea.',
        },
    },
    unknownBrewingStyle: "I don't understand the brewing style that you specified.",
    unknownTeaType: "I don't understand the tea type that you specified.",
    white: {
        gongFuCha: 'To brew gong fu cha style white tea: heat water to 85 degrees celcius or 185 degrees fahrenheit, use 3.5 to 4 grams of tea per 100 milliliters of water, steep tea for 20 seconds for fist infusion, adding 10 seconds for each sucessive infusion. You should be able to get 5 or so infusions out of this tea.',
        western: 'To brew western style white tea: heat water to 85 degrees celcius or 185 degrees fahrenheit, use 0.6 grams of tea per 100 milliliters of water, steep tea for 180 seconds for fist infusion, adding 60 seconds for each sucessive infusion. You should be able to get 2 or so infusions out of this tea.',
    },
    yellow: {
        gongFuCha: 'To brew gong fu cha style yellow tea: heat water to 85 degrees celcius or 185 degrees fahrenheit, use 3.5 to 4 grams of tea per 100 milliliters of water, steep tea for 15 seconds for fist infusion, adding 5 seconds for each sucessive infusion. You should be able to get 5 or so infusions out of this tea.',
        western: 'To brew western style yellow tea: heat water to 85 degrees celcius or 185 degrees fahrenheit, use 0.6 grams of tea per 100 milliliters of water, steep tea for 120 seconds for fist infusion, adding 60 seconds for each sucessive infusion. You should be able to get 2 or so infusions out of this tea.',
    },
};
/* tslint:enable:max-line-length */
