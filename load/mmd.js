{
    "name": "imdb_title",
    "comment": "IMDB metadata",
    "extends": "document",
    "parser": "xpath",
    "kids": [
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
        }
    ],
    "selector": {
        "url_path_tree": "http://www.imdb.com/title/"
    }
}