from flask import Flask, jsonify, request, render_template, url_for, redirect

app = Flask(__name__)

@app.route("/", methods=['POST'])
def parseSearch():
    data = request.get_json()
    print(data)
    return jsonify("Hundred Years' War", "1337-1453",
    [["Battle of Crecy", "1346", "The Battle of Crécy took place on 26 August 1346 in northern France between a French army commanded by King Philip VI and an English army led by King Edward III. The French attacked the English while they were traversing northern France during the Hundred Years' War, resulting in an English victory and heavy loss of life among the French. "],
    ["Battle of Poitiers", "1356", "The Battle of Poitiers was fought on 19 September 1356 between a French army commanded by King John II and an Anglo-Gascon force under Edward, the Black Prince, during the Hundred Years' War. It took place in western France, 5 miles (8 km) south of Poitiers, when approximately 14,000 to 16,000 French attacked a strong defensive position held by 6,000 Anglo-Gascons. "],
    ["Battle of Agincourt", "1415", "The Battle of Agincourt (/ˈædʒɪnkɔːr(t)/ AJ-in-kor(t);[a] French: Azincourt [azɛ̃kuʁ]) was an English victory in the Hundred Years' War. It took place on 25 October 1415 (Saint Crispin's Day) near Azincourt, in northern France.[b] The unexpected English victory against the numerically superior French army boosted English morale and prestige, crippled France, and started a new period of English dominance in the war that would last for 14 years until France defeated England in the Siege of Orléans in 1429. "]
    ])


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port="3000")