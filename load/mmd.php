<?php

header("Header set Access-Control-Allow-Origin", "*");

?>
{  "name": "imdb_title",
    "comment": "IMDB metadata",
    "extends": "document",
    "parser": "xpath",
    "kids": [
        {
            "scalar": {
                "name": "title",
                "xpath": "//h1[@class='header']"
            }
        },
        {
            "scalar": {
                "name": "rating",
                "xpath": "//span[@class='rating-rating']",
                "scalar_type": "StringType"
            }
        },
        {
            "collection": {
                "name": "directors",
                "xpath": "//td[@id='overview-top']//div[@class='txt-block'][contains(.,'Director')]//a",
                "layer": "9.0",
                "child_type": "person_details",
                "child_entity": "true",
                "kids": [
                    {
                        "composite": {
                            "name": "entity",
                            "kids": [
                                {
                                    "scalar": {
                                        "name": "location",
                                        "xpath": "./@href"
                                    }
                                },
                                {
                                    "scalar": {
                                        "name": "gist",
                                        "xpath": ".",
                                        "label": "name"
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "collection": {
                "name": "writers",
                "xpath": "//td[@id='overview-top']//div[@class='txt-block'][contains(.,'Writer')]//a",
                "layer": "8.5",
                "child_type": "person_details",
                "child_entity": "true",
                "kids": [
                    {
                        "composite": {
                            "name": "entity",
                            "kids": [
                                {
                                    "scalar": {
                                        "name": "location",
                                        "xpath": "./@href"
                                    }
                                },
                                {
                                    "scalar": {
                                        "name": "gist",
                                        "xpath": ".",
                                        "label": "name"
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "scalar": {
                "name": "poster_img",
                "xpath": "//td[@id='img_primary']//img/@src",
                "hide": "true",
                "scalar_type": "ParsedURLType"
            }
        }
    ],
    "selector": {
        "url_path_tree": "http://www.imdb.com/title/"
    }
}