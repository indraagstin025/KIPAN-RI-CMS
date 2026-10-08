// resources/js/data/narkotika-data.ts

export interface NarkotikaData {
    year: number;
    kasus: number;
    tersangka: number;
}

export type ProvinceDataMap = Record<string, NarkotikaData[]>;

// Data Sebaran Penanganan Kasus Narkotika per Wilayah Pelaksana (2009 - 2023)
export const realNarkotikaData: ProvinceDataMap = {
    "Aceh": [
        {
            "year": 2009,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2010,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2011,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2012,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2013,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2014,
            "kasus": 5,
            "tersangka": 5
        },
        {
            "year": 2015,
            "kasus": 1,
            "tersangka": 1
        },
        {
            "year": 2016,
            "kasus": 20,
            "tersangka": 22
        },
        {
            "year": 2017,
            "kasus": 15,
            "tersangka": 22
        },
        {
            "year": 2018,
            "kasus": 38,
            "tersangka": 58
        },
        {
            "year": 2019,
            "kasus": 26,
            "tersangka": 39
        },
        {
            "year": 2020,
            "kasus": 20,
            "tersangka": 30
        },
        {
            "year": 2021,
            "kasus": 31,
            "tersangka": 51
        },
        {
            "year": 2022,
            "kasus": 36,
            "tersangka": 51
        },
        {
            "year": 2023,
            "kasus": 43,
            "tersangka": 0
        }
    ],
    "Kepulauan Bangka Belitung": [
        {
            "year": 2009,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2010,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2011,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2012,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2013,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2014,
            "kasus": 8,
            "tersangka": 10
        },
        {
            "year": 2015,
            "kasus": 13,
            "tersangka": 17
        },
        {
            "year": 2016,
            "kasus": 23,
            "tersangka": 40
        },
        {
            "year": 2017,
            "kasus": 10,
            "tersangka": 12
        },
        {
            "year": 2018,
            "kasus": 11,
            "tersangka": 14
        },
        {
            "year": 2019,
            "kasus": 13,
            "tersangka": 24
        },
        {
            "year": 2020,
            "kasus": 11,
            "tersangka": 17
        },
        {
            "year": 2021,
            "kasus": 10,
            "tersangka": 18
        },
        {
            "year": 2022,
            "kasus": 14,
            "tersangka": 16
        },
        {
            "year": 2023,
            "kasus": 11,
            "tersangka": 0
        }
    ],
    "Bali": [
        {
            "year": 2009,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2010,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2011,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2012,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2013,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2014,
            "kasus": 2,
            "tersangka": 2
        },
        {
            "year": 2015,
            "kasus": 14,
            "tersangka": 15
        },
        {
            "year": 2016,
            "kasus": 44,
            "tersangka": 50
        },
        {
            "year": 2017,
            "kasus": 45,
            "tersangka": 49
        },
        {
            "year": 2018,
            "kasus": 51,
            "tersangka": 55
        },
        {
            "year": 2019,
            "kasus": 38,
            "tersangka": 48
        },
        {
            "year": 2020,
            "kasus": 34,
            "tersangka": 50
        },
        {
            "year": 2021,
            "kasus": 32,
            "tersangka": 46
        },
        {
            "year": 2022,
            "kasus": 48,
            "tersangka": 59
        },
        {
            "year": 2023,
            "kasus": 51,
            "tersangka": 0
        }
    ],
    "Banten": [
        {
            "year": 2009,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2010,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2011,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2012,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2013,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2014,
            "kasus": 6,
            "tersangka": 15
        },
        {
            "year": 2015,
            "kasus": 8,
            "tersangka": 12
        },
        {
            "year": 2016,
            "kasus": 16,
            "tersangka": 26
        },
        {
            "year": 2017,
            "kasus": 13,
            "tersangka": 33
        },
        {
            "year": 2018,
            "kasus": 10,
            "tersangka": 20
        },
        {
            "year": 2019,
            "kasus": 2,
            "tersangka": 4
        },
        {
            "year": 2020,
            "kasus": 3,
            "tersangka": 6
        },
        {
            "year": 2021,
            "kasus": 9,
            "tersangka": 9
        },
        {
            "year": 2022,
            "kasus": 8,
            "tersangka": 19
        },
        {
            "year": 2023,
            "kasus": 15,
            "tersangka": 0
        }
    ],
    "Bengkulu": [
        {
            "year": 2009,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2010,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2011,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2012,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2013,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2014,
            "kasus": 7,
            "tersangka": 12
        },
        {
            "year": 2015,
            "kasus": 11,
            "tersangka": 21
        },
        {
            "year": 2016,
            "kasus": 11,
            "tersangka": 22
        },
        {
            "year": 2017,
            "kasus": 11,
            "tersangka": 24
        },
        {
            "year": 2018,
            "kasus": 13,
            "tersangka": 24
        },
        {
            "year": 2019,
            "kasus": 14,
            "tersangka": 26
        },
        {
            "year": 2020,
            "kasus": 11,
            "tersangka": 31
        },
        {
            "year": 2021,
            "kasus": 18,
            "tersangka": 30
        },
        {
            "year": 2022,
            "kasus": 19,
            "tersangka": 24
        },
        {
            "year": 2023,
            "kasus": 22,
            "tersangka": 0
        }
    ],
    "DKI Jakarta": [
        {
            "year": 2009,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2010,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2011,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2012,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2013,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2014,
            "kasus": 5,
            "tersangka": 6
        },
        {
            "year": 2015,
            "kasus": 7,
            "tersangka": 12
        },
        {
            "year": 2016,
            "kasus": 15,
            "tersangka": 18
        },
        {
            "year": 2017,
            "kasus": 36,
            "tersangka": 47
        },
        {
            "year": 2018,
            "kasus": 23,
            "tersangka": 31
        },
        {
            "year": 2019,
            "kasus": 25,
            "tersangka": 38
        },
        {
            "year": 2020,
            "kasus": 11,
            "tersangka": 20
        },
        {
            "year": 2021,
            "kasus": 21,
            "tersangka": 27
        },
        {
            "year": 2022,
            "kasus": 19,
            "tersangka": 26
        },
        {
            "year": 2023,
            "kasus": 27,
            "tersangka": 0
        }
    ],
    "Gorontalo": [
        {
            "year": 2009,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2010,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2011,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2012,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2013,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2014,
            "kasus": 12,
            "tersangka": 12
        },
        {
            "year": 2015,
            "kasus": 9,
            "tersangka": 10
        },
        {
            "year": 2016,
            "kasus": 10,
            "tersangka": 10
        },
        {
            "year": 2017,
            "kasus": 19,
            "tersangka": 19
        },
        {
            "year": 2018,
            "kasus": 21,
            "tersangka": 32
        },
        {
            "year": 2019,
            "kasus": 9,
            "tersangka": 18
        },
        {
            "year": 2020,
            "kasus": 7,
            "tersangka": 10
        },
        {
            "year": 2021,
            "kasus": 7,
            "tersangka": 7
        },
        {
            "year": 2022,
            "kasus": 18,
            "tersangka": 21
        },
        {
            "year": 2023,
            "kasus": 12,
            "tersangka": 0
        }
    ],
    "Jawa Barat": [
        {
            "year": 2009,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2010,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2011,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2012,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2013,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2014,
            "kasus": 11,
            "tersangka": 19
        },
        {
            "year": 2015,
            "kasus": 6,
            "tersangka": 6
        },
        {
            "year": 2016,
            "kasus": 14,
            "tersangka": 19
        },
        {
            "year": 2017,
            "kasus": 50,
            "tersangka": 65
        },
        {
            "year": 2018,
            "kasus": 42,
            "tersangka": 72
        },
        {
            "year": 2019,
            "kasus": 46,
            "tersangka": 66
        },
        {
            "year": 2020,
            "kasus": 49,
            "tersangka": 75
        },
        {
            "year": 2021,
            "kasus": 41,
            "tersangka": 52
        },
        {
            "year": 2022,
            "kasus": 52,
            "tersangka": 64
        },
        {
            "year": 2023,
            "kasus": 51,
            "tersangka": 0
        }
    ],
    "Jambi": [
        {
            "year": 2009,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2010,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2011,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2012,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2013,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2014,
            "kasus": 22,
            "tersangka": 33
        },
        {
            "year": 2015,
            "kasus": 15,
            "tersangka": 30
        },
        {
            "year": 2016,
            "kasus": 17,
            "tersangka": 34
        },
        {
            "year": 2017,
            "kasus": 22,
            "tersangka": 33
        },
        {
            "year": 2018,
            "kasus": 26,
            "tersangka": 34
        },
        {
            "year": 2019,
            "kasus": 24,
            "tersangka": 44
        },
        {
            "year": 2020,
            "kasus": 44,
            "tersangka": 77
        },
        {
            "year": 2021,
            "kasus": 43,
            "tersangka": 75
        },
        {
            "year": 2022,
            "kasus": 48,
            "tersangka": 78
        },
        {
            "year": 2023,
            "kasus": 36,
            "tersangka": 0
        }
    ],
    "Jawa Tengah": [
        {
            "year": 2009,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2010,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2011,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2012,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2013,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2014,
            "kasus": 3,
            "tersangka": 3
        },
        {
            "year": 2015,
            "kasus": 3,
            "tersangka": 3
        },
        {
            "year": 2016,
            "kasus": 31,
            "tersangka": 31
        },
        {
            "year": 2017,
            "kasus": 28,
            "tersangka": 51
        },
        {
            "year": 2018,
            "kasus": 21,
            "tersangka": 36
        },
        {
            "year": 2019,
            "kasus": 20,
            "tersangka": 40
        },
        {
            "year": 2020,
            "kasus": 21,
            "tersangka": 36
        },
        {
            "year": 2021,
            "kasus": 18,
            "tersangka": 29
        },
        {
            "year": 2022,
            "kasus": 20,
            "tersangka": 32
        },
        {
            "year": 2023,
            "kasus": 20,
            "tersangka": 0
        }
    ],
    "Jawa Timur": [
        {
            "year": 2009,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2010,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2011,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2012,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2013,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2014,
            "kasus": 28,
            "tersangka": 29
        },
        {
            "year": 2015,
            "kasus": 85,
            "tersangka": 97
        },
        {
            "year": 2016,
            "kasus": 47,
            "tersangka": 56
        },
        {
            "year": 2017,
            "kasus": 67,
            "tersangka": 91
        },
        {
            "year": 2018,
            "kasus": 60,
            "tersangka": 81
        },
        {
            "year": 2019,
            "kasus": 61,
            "tersangka": 88
        },
        {
            "year": 2020,
            "kasus": 59,
            "tersangka": 76
        },
        {
            "year": 2021,
            "kasus": 47,
            "tersangka": 61
        },
        {
            "year": 2022,
            "kasus": 52,
            "tersangka": 74
        },
        {
            "year": 2023,
            "kasus": 57,
            "tersangka": 0
        }
    ],
    "Kalimantan Barat": [
        {
            "year": 2009,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2010,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2011,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2012,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2013,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2014,
            "kasus": 7,
            "tersangka": 9
        },
        {
            "year": 2015,
            "kasus": 8,
            "tersangka": 13
        },
        {
            "year": 2016,
            "kasus": 11,
            "tersangka": 19
        },
        {
            "year": 2017,
            "kasus": 19,
            "tersangka": 37
        },
        {
            "year": 2018,
            "kasus": 13,
            "tersangka": 33
        },
        {
            "year": 2019,
            "kasus": 9,
            "tersangka": 20
        },
        {
            "year": 2020,
            "kasus": 7,
            "tersangka": 16
        },
        {
            "year": 2021,
            "kasus": 5,
            "tersangka": 16
        },
        {
            "year": 2022,
            "kasus": 9,
            "tersangka": 18
        },
        {
            "year": 2023,
            "kasus": 14,
            "tersangka": 0
        }
    ],
    "Kalimantan Selatan": [
        {
            "year": 2009,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2010,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2011,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2012,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2013,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2014,
            "kasus": 10,
            "tersangka": 19
        },
        {
            "year": 2015,
            "kasus": 19,
            "tersangka": 31
        },
        {
            "year": 2016,
            "kasus": 16,
            "tersangka": 35
        },
        {
            "year": 2017,
            "kasus": 43,
            "tersangka": 52
        },
        {
            "year": 2018,
            "kasus": 37,
            "tersangka": 47
        },
        {
            "year": 2019,
            "kasus": 48,
            "tersangka": 63
        },
        {
            "year": 2020,
            "kasus": 52,
            "tersangka": 86
        },
        {
            "year": 2021,
            "kasus": 43,
            "tersangka": 62
        },
        {
            "year": 2022,
            "kasus": 37,
            "tersangka": 55
        },
        {
            "year": 2023,
            "kasus": 35,
            "tersangka": 0
        }
    ],
    "Kalimantan Utara": [
        {
            "year": 2009,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2010,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2011,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2012,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2013,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2014,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2015,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2016,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2017,
            "kasus": 15,
            "tersangka": 18
        },
        {
            "year": 2018,
            "kasus": 30,
            "tersangka": 43
        },
        {
            "year": 2019,
            "kasus": 22,
            "tersangka": 38
        },
        {
            "year": 2020,
            "kasus": 16,
            "tersangka": 33
        },
        {
            "year": 2021,
            "kasus": 12,
            "tersangka": 20
        },
        {
            "year": 2022,
            "kasus": 16,
            "tersangka": 29
        },
        {
            "year": 2023,
            "kasus": 26,
            "tersangka": 0
        }
    ],
    "Kalimantan Tengah": [
        {
            "year": 2009,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2010,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2011,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2012,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2013,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2014,
            "kasus": 3,
            "tersangka": 4
        },
        {
            "year": 2015,
            "kasus": 14,
            "tersangka": 16
        },
        {
            "year": 2016,
            "kasus": 16,
            "tersangka": 20
        },
        {
            "year": 2017,
            "kasus": 28,
            "tersangka": 31
        },
        {
            "year": 2018,
            "kasus": 30,
            "tersangka": 35
        },
        {
            "year": 2019,
            "kasus": 23,
            "tersangka": 39
        },
        {
            "year": 2020,
            "kasus": 18,
            "tersangka": 25
        },
        {
            "year": 2021,
            "kasus": 15,
            "tersangka": 24
        },
        {
            "year": 2022,
            "kasus": 12,
            "tersangka": 28
        },
        {
            "year": 2023,
            "kasus": 14,
            "tersangka": 0
        }
    ],
    "Kalimantan Timur": [
        {
            "year": 2009,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2010,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2011,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2012,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2013,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2014,
            "kasus": 30,
            "tersangka": 34
        },
        {
            "year": 2015,
            "kasus": 49,
            "tersangka": 76
        },
        {
            "year": 2016,
            "kasus": 62,
            "tersangka": 104
        },
        {
            "year": 2017,
            "kasus": 78,
            "tersangka": 60
        },
        {
            "year": 2018,
            "kasus": 76,
            "tersangka": 44
        },
        {
            "year": 2019,
            "kasus": 65,
            "tersangka": 84
        },
        {
            "year": 2020,
            "kasus": 50,
            "tersangka": 59
        },
        {
            "year": 2021,
            "kasus": 31,
            "tersangka": 38
        },
        {
            "year": 2022,
            "kasus": 26,
            "tersangka": 50
        },
        {
            "year": 2023,
            "kasus": 37,
            "tersangka": 0
        }
    ],
    "Kepulauan Riau": [
        {
            "year": 2009,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2010,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2011,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2012,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2013,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2014,
            "kasus": 28,
            "tersangka": 44
        },
        {
            "year": 2015,
            "kasus": 56,
            "tersangka": 87
        },
        {
            "year": 2016,
            "kasus": 52,
            "tersangka": 72
        },
        {
            "year": 2017,
            "kasus": 51,
            "tersangka": 83
        },
        {
            "year": 2018,
            "kasus": 42,
            "tersangka": 67
        },
        {
            "year": 2019,
            "kasus": 51,
            "tersangka": 78
        },
        {
            "year": 2020,
            "kasus": 33,
            "tersangka": 56
        },
        {
            "year": 2021,
            "kasus": 22,
            "tersangka": 33
        },
        {
            "year": 2022,
            "kasus": 20,
            "tersangka": 37
        },
        {
            "year": 2023,
            "kasus": 30,
            "tersangka": 0
        }
    ],
    "Lampung": [
        {
            "year": 2009,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2010,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2011,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2012,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2013,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2014,
            "kasus": 3,
            "tersangka": 9
        },
        {
            "year": 2015,
            "kasus": 35,
            "tersangka": 228
        },
        {
            "year": 2016,
            "kasus": 28,
            "tersangka": 96
        },
        {
            "year": 2017,
            "kasus": 14,
            "tersangka": 21
        },
        {
            "year": 2018,
            "kasus": 9,
            "tersangka": 22
        },
        {
            "year": 2019,
            "kasus": 10,
            "tersangka": 31
        },
        {
            "year": 2020,
            "kasus": 9,
            "tersangka": 24
        },
        {
            "year": 2021,
            "kasus": 10,
            "tersangka": 24
        },
        {
            "year": 2022,
            "kasus": 17,
            "tersangka": 42
        },
        {
            "year": 2023,
            "kasus": 12,
            "tersangka": 0
        }
    ],
    "Maluku": [
        {
            "year": 2009,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2010,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2011,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2012,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2013,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2014,
            "kasus": 3,
            "tersangka": 4
        },
        {
            "year": 2015,
            "kasus": 6,
            "tersangka": 7
        },
        {
            "year": 2016,
            "kasus": 6,
            "tersangka": 8
        },
        {
            "year": 2017,
            "kasus": 9,
            "tersangka": 17
        },
        {
            "year": 2018,
            "kasus": 13,
            "tersangka": 13
        },
        {
            "year": 2019,
            "kasus": 11,
            "tersangka": 13
        },
        {
            "year": 2020,
            "kasus": 12,
            "tersangka": 18
        },
        {
            "year": 2021,
            "kasus": 12,
            "tersangka": 18
        },
        {
            "year": 2022,
            "kasus": 12,
            "tersangka": 26
        },
        {
            "year": 2023,
            "kasus": 9,
            "tersangka": 0
        }
    ],
    "Maluku Utara": [
        {
            "year": 2009,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2010,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2011,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2012,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2013,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2014,
            "kasus": 4,
            "tersangka": 4
        },
        {
            "year": 2015,
            "kasus": 3,
            "tersangka": 3
        },
        {
            "year": 2016,
            "kasus": 16,
            "tersangka": 19
        },
        {
            "year": 2017,
            "kasus": 13,
            "tersangka": 17
        },
        {
            "year": 2018,
            "kasus": 8,
            "tersangka": 13
        },
        {
            "year": 2019,
            "kasus": 13,
            "tersangka": 17
        },
        {
            "year": 2020,
            "kasus": 6,
            "tersangka": 8
        },
        {
            "year": 2021,
            "kasus": 7,
            "tersangka": 11
        },
        {
            "year": 2022,
            "kasus": 8,
            "tersangka": 10
        },
        {
            "year": 2023,
            "kasus": 8,
            "tersangka": 0
        }
    ],
    "Nusa Tenggara Barat": [
        {
            "year": 2009,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2010,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2011,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2012,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2013,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2014,
            "kasus": 6,
            "tersangka": 10
        },
        {
            "year": 2015,
            "kasus": 5,
            "tersangka": 7
        },
        {
            "year": 2016,
            "kasus": 15,
            "tersangka": 24
        },
        {
            "year": 2017,
            "kasus": 7,
            "tersangka": 9
        },
        {
            "year": 2018,
            "kasus": 11,
            "tersangka": 17
        },
        {
            "year": 2019,
            "kasus": 7,
            "tersangka": 10
        },
        {
            "year": 2020,
            "kasus": 10,
            "tersangka": 12
        },
        {
            "year": 2021,
            "kasus": 6,
            "tersangka": 13
        },
        {
            "year": 2022,
            "kasus": 10,
            "tersangka": 26
        },
        {
            "year": 2023,
            "kasus": 18,
            "tersangka": 0
        }
    ],
    "Nusa Tenggara Timur": [
        {
            "year": 2009,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2010,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2011,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2012,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2013,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2014,
            "kasus": 2,
            "tersangka": 2
        },
        {
            "year": 2015,
            "kasus": 2,
            "tersangka": 4
        },
        {
            "year": 2016,
            "kasus": 1,
            "tersangka": 2
        },
        {
            "year": 2017,
            "kasus": 2,
            "tersangka": 1
        },
        {
            "year": 2018,
            "kasus": 2,
            "tersangka": 1
        },
        {
            "year": 2019,
            "kasus": 2,
            "tersangka": 5
        },
        {
            "year": 2020,
            "kasus": 3,
            "tersangka": 3
        },
        {
            "year": 2021,
            "kasus": 2,
            "tersangka": 3
        },
        {
            "year": 2022,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2023,
            "kasus": 5,
            "tersangka": 0
        }
    ],
    "Papua Barat": [
        {
            "year": 2009,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2010,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2011,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2012,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2013,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2014,
            "kasus": 1,
            "tersangka": 1
        },
        {
            "year": 2015,
            "kasus": 3,
            "tersangka": 4
        },
        {
            "year": 2016,
            "kasus": 9,
            "tersangka": 9
        },
        {
            "year": 2017,
            "kasus": 6,
            "tersangka": 8
        },
        {
            "year": 2018,
            "kasus": 7,
            "tersangka": 9
        },
        {
            "year": 2019,
            "kasus": 6,
            "tersangka": 7
        },
        {
            "year": 2020,
            "kasus": 6,
            "tersangka": 8
        },
        {
            "year": 2021,
            "kasus": 6,
            "tersangka": 9
        },
        {
            "year": 2022,
            "kasus": 5,
            "tersangka": 8
        },
        {
            "year": 2023,
            "kasus": 4,
            "tersangka": 0
        }
    ],
    "Papua": [
        {
            "year": 2009,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2010,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2011,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2012,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2013,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2014,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2015,
            "kasus": 5,
            "tersangka": 5
        },
        {
            "year": 2016,
            "kasus": 18,
            "tersangka": 20
        },
        {
            "year": 2017,
            "kasus": 16,
            "tersangka": 17
        },
        {
            "year": 2018,
            "kasus": 39,
            "tersangka": 44
        },
        {
            "year": 2019,
            "kasus": 18,
            "tersangka": 18
        },
        {
            "year": 2020,
            "kasus": 19,
            "tersangka": 19
        },
        {
            "year": 2021,
            "kasus": 20,
            "tersangka": 19
        },
        {
            "year": 2022,
            "kasus": 15,
            "tersangka": 16
        },
        {
            "year": 2023,
            "kasus": 15,
            "tersangka": 0
        }
    ],
    "Riau": [
        {
            "year": 2009,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2010,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2011,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2012,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2013,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2014,
            "kasus": 6,
            "tersangka": 6
        },
        {
            "year": 2015,
            "kasus": 19,
            "tersangka": 26
        },
        {
            "year": 2016,
            "kasus": 22,
            "tersangka": 33
        },
        {
            "year": 2017,
            "kasus": 24,
            "tersangka": 34
        },
        {
            "year": 2018,
            "kasus": 36,
            "tersangka": 52
        },
        {
            "year": 2019,
            "kasus": 39,
            "tersangka": 62
        },
        {
            "year": 2020,
            "kasus": 37,
            "tersangka": 48
        },
        {
            "year": 2021,
            "kasus": 22,
            "tersangka": 28
        },
        {
            "year": 2022,
            "kasus": 38,
            "tersangka": 57
        },
        {
            "year": 2023,
            "kasus": 24,
            "tersangka": 0
        }
    ],
    "Sulawesi Barat": [
        {
            "year": 2009,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2010,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2011,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2012,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2013,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2014,
            "kasus": 3,
            "tersangka": 10
        },
        {
            "year": 2015,
            "kasus": 6,
            "tersangka": 10
        },
        {
            "year": 2016,
            "kasus": 4,
            "tersangka": 10
        },
        {
            "year": 2017,
            "kasus": 21,
            "tersangka": 25
        },
        {
            "year": 2018,
            "kasus": 13,
            "tersangka": 28
        },
        {
            "year": 2019,
            "kasus": 16,
            "tersangka": 22
        },
        {
            "year": 2020,
            "kasus": 15,
            "tersangka": 28
        },
        {
            "year": 2021,
            "kasus": 16,
            "tersangka": 33
        },
        {
            "year": 2022,
            "kasus": 19,
            "tersangka": 42
        },
        {
            "year": 2023,
            "kasus": 18,
            "tersangka": 0
        }
    ],
    "Sulawesi Selatan": [
        {
            "year": 2009,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2010,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2011,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2012,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2013,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2014,
            "kasus": 12,
            "tersangka": 12
        },
        {
            "year": 2015,
            "kasus": 36,
            "tersangka": 65
        },
        {
            "year": 2016,
            "kasus": 25,
            "tersangka": 33
        },
        {
            "year": 2017,
            "kasus": 27,
            "tersangka": 56
        },
        {
            "year": 2018,
            "kasus": 26,
            "tersangka": 47
        },
        {
            "year": 2019,
            "kasus": 30,
            "tersangka": 51
        },
        {
            "year": 2020,
            "kasus": 31,
            "tersangka": 51
        },
        {
            "year": 2021,
            "kasus": 15,
            "tersangka": 23
        },
        {
            "year": 2022,
            "kasus": 27,
            "tersangka": 54
        },
        {
            "year": 2023,
            "kasus": 31,
            "tersangka": 0
        }
    ],
    "Sulawesi Tengah": [
        {
            "year": 2009,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2010,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2011,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2012,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2013,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2014,
            "kasus": 2,
            "tersangka": 8
        },
        {
            "year": 2015,
            "kasus": 17,
            "tersangka": 18
        },
        {
            "year": 2016,
            "kasus": 34,
            "tersangka": 43
        },
        {
            "year": 2017,
            "kasus": 30,
            "tersangka": 45
        },
        {
            "year": 2018,
            "kasus": 33,
            "tersangka": 61
        },
        {
            "year": 2019,
            "kasus": 58,
            "tersangka": 79
        },
        {
            "year": 2020,
            "kasus": 36,
            "tersangka": 64
        },
        {
            "year": 2021,
            "kasus": 35,
            "tersangka": 53
        },
        {
            "year": 2022,
            "kasus": 47,
            "tersangka": 69
        },
        {
            "year": 2023,
            "kasus": 37,
            "tersangka": 0
        }
    ],
    "Sulawesi Tenggara": [
        {
            "year": 2009,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2010,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2011,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2012,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2013,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2014,
            "kasus": 4,
            "tersangka": 4
        },
        {
            "year": 2015,
            "kasus": 7,
            "tersangka": 12
        },
        {
            "year": 2016,
            "kasus": 14,
            "tersangka": 18
        },
        {
            "year": 2017,
            "kasus": 20,
            "tersangka": 25
        },
        {
            "year": 2018,
            "kasus": 23,
            "tersangka": 30
        },
        {
            "year": 2019,
            "kasus": 21,
            "tersangka": 33
        },
        {
            "year": 2020,
            "kasus": 11,
            "tersangka": 15
        },
        {
            "year": 2021,
            "kasus": 17,
            "tersangka": 26
        },
        {
            "year": 2022,
            "kasus": 15,
            "tersangka": 20
        },
        {
            "year": 2023,
            "kasus": 13,
            "tersangka": 0
        }
    ],
    "Sulawesi Utara": [
        {
            "year": 2009,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2010,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2011,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2012,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2013,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2014,
            "kasus": 3,
            "tersangka": 3
        },
        {
            "year": 2015,
            "kasus": 5,
            "tersangka": 5
        },
        {
            "year": 2016,
            "kasus": 7,
            "tersangka": 12
        },
        {
            "year": 2017,
            "kasus": 9,
            "tersangka": 13
        },
        {
            "year": 2018,
            "kasus": 6,
            "tersangka": 16
        },
        {
            "year": 2019,
            "kasus": 6,
            "tersangka": 12
        },
        {
            "year": 2020,
            "kasus": 5,
            "tersangka": 9
        },
        {
            "year": 2021,
            "kasus": 7,
            "tersangka": 12
        },
        {
            "year": 2022,
            "kasus": 9,
            "tersangka": 11
        },
        {
            "year": 2023,
            "kasus": 12,
            "tersangka": 0
        }
    ],
    "Sumatera Barat": [
        {
            "year": 2009,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2010,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2011,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2012,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2013,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2014,
            "kasus": 2,
            "tersangka": 2
        },
        {
            "year": 2015,
            "kasus": 6,
            "tersangka": 11
        },
        {
            "year": 2016,
            "kasus": 20,
            "tersangka": 28
        },
        {
            "year": 2017,
            "kasus": 10,
            "tersangka": 13
        },
        {
            "year": 2018,
            "kasus": 14,
            "tersangka": 15
        },
        {
            "year": 2019,
            "kasus": 18,
            "tersangka": 31
        },
        {
            "year": 2020,
            "kasus": 19,
            "tersangka": 26
        },
        {
            "year": 2021,
            "kasus": 26,
            "tersangka": 34
        },
        {
            "year": 2022,
            "kasus": 22,
            "tersangka": 35
        },
        {
            "year": 2023,
            "kasus": 23,
            "tersangka": 0
        }
    ],
    "Sumatera Selatan": [
        {
            "year": 2009,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2010,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2011,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2012,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2013,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2014,
            "kasus": 25,
            "tersangka": 28
        },
        {
            "year": 2015,
            "kasus": 40,
            "tersangka": 54
        },
        {
            "year": 2016,
            "kasus": 63,
            "tersangka": 92
        },
        {
            "year": 2017,
            "kasus": 43,
            "tersangka": 61
        },
        {
            "year": 2018,
            "kasus": 67,
            "tersangka": 92
        },
        {
            "year": 2019,
            "kasus": 38,
            "tersangka": 53
        },
        {
            "year": 2020,
            "kasus": 29,
            "tersangka": 34
        },
        {
            "year": 2021,
            "kasus": 31,
            "tersangka": 43
        },
        {
            "year": 2022,
            "kasus": 36,
            "tersangka": 53
        },
        {
            "year": 2023,
            "kasus": 34,
            "tersangka": 0
        }
    ],
    "Sumatera Utara": [
        {
            "year": 2009,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2010,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2011,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2012,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2013,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2014,
            "kasus": 23,
            "tersangka": 33
        },
        {
            "year": 2015,
            "kasus": 28,
            "tersangka": 35
        },
        {
            "year": 2016,
            "kasus": 99,
            "tersangka": 130
        },
        {
            "year": 2017,
            "kasus": 95,
            "tersangka": 132
        },
        {
            "year": 2018,
            "kasus": 89,
            "tersangka": 138
        },
        {
            "year": 2019,
            "kasus": 70,
            "tersangka": 110
        },
        {
            "year": 2020,
            "kasus": 62,
            "tersangka": 80
        },
        {
            "year": 2021,
            "kasus": 54,
            "tersangka": 82
        },
        {
            "year": 2022,
            "kasus": 76,
            "tersangka": 118
        },
        {
            "year": 2023,
            "kasus": 95,
            "tersangka": 0
        }
    ],
    "DI Yogyakarta": [
        {
            "year": 2009,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2010,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2011,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2012,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2013,
            "kasus": 0,
            "tersangka": 0
        },
        {
            "year": 2014,
            "kasus": 6,
            "tersangka": 7
        },
        {
            "year": 2015,
            "kasus": 7,
            "tersangka": 12
        },
        {
            "year": 2016,
            "kasus": 17,
            "tersangka": 28
        },
        {
            "year": 2017,
            "kasus": 22,
            "tersangka": 30
        },
        {
            "year": 2018,
            "kasus": 24,
            "tersangka": 28
        },
        {
            "year": 2019,
            "kasus": 20,
            "tersangka": 27
        },
        {
            "year": 2020,
            "kasus": 18,
            "tersangka": 23
        },
        {
            "year": 2021,
            "kasus": 29,
            "tersangka": 35
        },
        {
            "year": 2022,
            "kasus": 27,
            "tersangka": 38
        },
        {
            "year": 2023,
            "kasus": 18,
            "tersangka": 0
        }
    ]
};

// Provide a default map that falls back if a province is not present
export const getProvinceData = (provinceName: string): NarkotikaData[] => {
    return realNarkotikaData[provinceName] || [];
};

// Calculate total cases overall for a province
export const getProvinceTotalCases = (provinceName: string): number => {
    const data = getProvinceData(provinceName);
    return data.reduce((sum, item) => sum + item.kasus, 0);
};

export const getProvinceTotalArrests = (provinceName: string): number => {
    const data = getProvinceData(provinceName);
    return data.reduce((sum, item) => sum + item.tersangka, 0);
};

// Get max total cases globally for color scaling
export const getMaxTotalCases = (): number => {
    let max = 0;
    Object.keys(realNarkotikaData).forEach(prov => {
        const total = getProvinceTotalCases(prov);
        if (total > max) max = total;
    });
    return max;
};

export const summaryData = {
  "totalKasus": "9.348",
  "totalAset": "Rp 1.127.254.197.376"
};
export const kasusPerTahun = [
  {
    "year": 2009,
    "kasus": 5,
    "tersangka": 2
  },
  {
    "year": 2010,
    "kasus": 64,
    "tersangka": 75
  },
  {
    "year": 2011,
    "kasus": 83,
    "tersangka": 143
  },
  {
    "year": 2012,
    "kasus": 104,
    "tersangka": 187
  },
  {
    "year": 2013,
    "kasus": 150,
    "tersangka": 245
  },
  {
    "year": 2014,
    "kasus": 384,
    "tersangka": 588
  },
  {
    "year": 2015,
    "kasus": 644,
    "tersangka": 1154
  },
  {
    "year": 2016,
    "kasus": 881,
    "tersangka": 1361
  },
  {
    "year": 2017,
    "kasus": 990,
    "tersangka": 1419
  },
  {
    "year": 2018,
    "kasus": 1039,
    "tersangka": 1545
  },
  {
    "year": 2019,
    "kasus": 951,
    "tersangka": 1505
  },
  {
    "year": 2020,
    "kasus": 833,
    "tersangka": 1307
  },
  {
    "year": 2021,
    "kasus": 766,
    "tersangka": 1184
  },
  {
    "year": 2022,
    "kasus": 879,
    "tersangka": 1422
  },
  {
    "year": 2023,
    "kasus": 924,
    "tersangka": null
  },
  {
    "year": 2024,
    "kasus": 651,
    "tersangka": null
  }
];
export const barangBuktiData = [
  {
    "no": 1,
    "nama": "GANJA",
    "total": "29.452.141,64",
    "satuan": "Gram"
  },
  {
    "no": 2,
    "nama": "SHABU",
    "total": "16.435.534,94",
    "satuan": "Gram"
  },
  {
    "no": 3,
    "nama": "EKSTASI",
    "total": "5.020.475",
    "satuan": "Butir"
  },
  {
    "no": 4,
    "nama": "CARISOPRODOL",
    "total": "2.419.285",
    "satuan": "Butir"
  },
  {
    "no": 5,
    "nama": "OBAT-OBATAN",
    "total": "2.370.980",
    "satuan": "Butir"
  },
  {
    "no": 6,
    "nama": "POHON GANJA",
    "total": "1.511.442",
    "satuan": "Batang"
  },
  {
    "no": 7,
    "nama": "HAPPY FIVE",
    "total": "351.429",
    "satuan": "Butir"
  },
  {
    "no": 8,
    "nama": "SAFROLE",
    "total": "257.000",
    "satuan": "Mililiter"
  },
  {
    "no": 9,
    "nama": "EKSTASI",
    "total": "227.119",
    "satuan": "Tablet"
  },
  {
    "no": 10,
    "nama": "KHAT",
    "total": "202.480",
    "satuan": "Gram"
  },
  {
    "no": 11,
    "nama": "TOLUENE",
    "total": "99.983",
    "satuan": "Mililiter"
  },
  {
    "no": 12,
    "nama": "H2SO4",
    "total": "85.670",
    "satuan": "Mililiter"
  },
  {
    "no": 13,
    "nama": "HCL",
    "total": "81.630",
    "satuan": "Mililiter"
  },
  {
    "no": 14,
    "nama": "EKSTASI",
    "total": "67.244,85",
    "satuan": "Gram"
  },
  {
    "no": 15,
    "nama": "KETAMINE",
    "total": "50.000",
    "satuan": "Mililiter"
  },
  {
    "no": 16,
    "nama": "HEROIN",
    "total": "42.250,23",
    "satuan": "Gram"
  },
  {
    "no": 17,
    "nama": "ASETON",
    "total": "36.338,83",
    "satuan": "Mililiter"
  },
  {
    "no": 18,
    "nama": "BENZODIAZEPINE",
    "total": "34.352",
    "satuan": "Butir"
  },
  {
    "no": 19,
    "nama": "EPHEDRINE",
    "total": "22.470",
    "satuan": "Mililiter"
  },
  {
    "no": 20,
    "nama": "4-FPP",
    "total": "16.586",
    "satuan": "Butir"
  },
  {
    "no": 21,
    "nama": "SHABU",
    "total": "14.820",
    "satuan": "Mililiter"
  },
  {
    "no": 22,
    "nama": "TOLUENE",
    "total": "13.025,35",
    "satuan": "Gram"
  },
  {
    "no": 23,
    "nama": "PIPERONAL",
    "total": "10.000",
    "satuan": "Gram"
  },
  {
    "no": 24,
    "nama": "PMMA",
    "total": "9.900",
    "satuan": "Butir"
  },
  {
    "no": 25,
    "nama": "DAFTAR G",
    "total": "8.305",
    "satuan": "Butir"
  },
  {
    "no": 26,
    "nama": "EPHEDRINE",
    "total": "7.724,01",
    "satuan": "Gram"
  },
  {
    "no": 27,
    "nama": "GANJA SINTETIK",
    "total": "3.445,58",
    "satuan": "Gram"
  },
  {
    "no": 28,
    "nama": "DIMETILTRIPTAMIN",
    "total": "3.389,75",
    "satuan": "Gram"
  },
  {
    "no": 29,
    "nama": "KOKAIN",
    "total": "2.407,76",
    "satuan": "Gram"
  },
  {
    "no": 30,
    "nama": "HCL",
    "total": "1.159,34",
    "satuan": "Gram"
  },
  {
    "no": 31,
    "nama": "BIJI GANJA",
    "total": "950,97",
    "satuan": "Gram"
  },
  {
    "no": 32,
    "nama": "SHABU",
    "total": "652",
    "satuan": "Butir"
  },
  {
    "no": 33,
    "nama": "HASHISH",
    "total": "320",
    "satuan": "Mililiter"
  },
  {
    "no": 34,
    "nama": "HAPPY COOKIES",
    "total": "303,2",
    "satuan": "Gram"
  },
  {
    "no": 35,
    "nama": "HASHISH",
    "total": "135,66",
    "satuan": "Gram"
  },
  {
    "no": 36,
    "nama": "MORFIN",
    "total": "107,44",
    "satuan": "Gram"
  },
  {
    "no": 37,
    "nama": "CANNA CHOCOLATE",
    "total": "95,86",
    "satuan": "Gram"
  },
  {
    "no": 38,
    "nama": "LAHAN GANJA",
    "total": "65,5",
    "satuan": "Hektar"
  },
  {
    "no": 39,
    "nama": "TENAMFETAMINE",
    "total": "52,02",
    "satuan": "Gram"
  },
  {
    "no": 40,
    "nama": "PMMA",
    "total": "35,3",
    "satuan": "Gram"
  },
  {
    "no": 41,
    "nama": "METHCATINONE",
    "total": "30,5",
    "satuan": "Gram"
  },
  {
    "no": 42,
    "nama": "BIJI GANJA",
    "total": "26",
    "satuan": "Biji"
  },
  {
    "no": 43,
    "nama": "THC",
    "total": "9,2",
    "satuan": "Gram"
  },
  {
    "no": 44,
    "nama": "METHILON",
    "total": "7,4",
    "satuan": "Gram"
  },
  {
    "no": 45,
    "nama": "KODEIN",
    "total": "4",
    "satuan": "Gram"
  },
  {
    "no": 46,
    "nama": "KETAMINE",
    "total": "3,18",
    "satuan": "Gram"
  }
];
