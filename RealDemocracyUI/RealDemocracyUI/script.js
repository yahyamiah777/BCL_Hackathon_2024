voteArr = []
index = 0;

function next(){
    if(this.index < this.voteArr.length-1){
        //Reset divs
        const chartContainer = document.getElementById('chartContainer');
        chartContainer.innerHTML = ''
        const info = document.getElementById('sumContainer');
        info.innerHTML = ''
        const ques = document.getElementById('questionContainer');
        ques.innerHTML = ''

        this.index += 1
        this.voteArr[index].output()
    }
}

function prev(){
    if(index > 0){
        //Reset divs
        const chartContainer = document.getElementById('chartContainer');
        chartContainer.innerHTML = ''
        const info = document.getElementById('sumContainer');
        info.innerHTML = ''
        const ques = document.getElementById('questionContainer');
        ques.innerHTML = ''

        this.index -= 1
        this.voteArr[index].output()
    }
}

document.getElementById('btnq').addEventListener('click', function() {
    let nextB = document.createElement('button');
    nextB.textContent = 'Next';
    nextB.addEventListener('click', next);

    let prevB = document.createElement('button');
    prevB.textContent = 'Previous';
    prevB.addEventListener('click', prev);

    var input = document.getElementById("query")
    var data = getRelatedVotes(input.value)

    data.forEach(vote => {
        var parties = [];
        vote.parties.forEach(party => {
            console.log(party.ayes);
            var partyObj = new Party(party.party, party.ayes, party.noes, party.color);
            parties.push(partyObj);
        });

        var voteObj = new Vote(vote.niceTitle, parties);
        voteArr.push(voteObj);
        
    }); 
    voteArr[0].output();
});


function getRelatedVotes(query) {
    // Get related voting data
    // Example URL to make a GET request to
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const params = {
        userQuery: query,
    };
    var voteData = ""

    const queryString = Object.keys(params)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
        .join('&');

    const urlWithParams = url + '?' + queryString;
    fetch(urlWithParams).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON response
    }).then(data => {
        //console.log('GET request with parameters successful:', data);
        // Handle the data here
        voteData = data
    }).catch(error => {
        console.error('There was a problem with the GET request:', error);
    });


    const dummyJson = [
        {
          "niceTitle": "Simplified Immigration Appeal Process for Suspensive Claims",
          "summary": "This legislation amends the rules for how immigration and asylum appeals are handled in the UK, specifically for suspensive claims. Suspensive claims are appeals made by individuals against removal from the UK, arguing that their removal should be paused. The new rules streamline the process, ensuring faster decisions and clarifying the steps for both applicants and the authorities.",
          "questions": [
            {
              "question": "What is a suspensive claim?",
              "answer": "A suspensive claim is an appeal made by an individual to pause their removal from the UK, arguing that their removal would be unjust or unsafe."
            },
            {
              "question": "What changes if this bill passes?",
              "answer": "The appeal process for suspensive claims will become quicker and more structured. New timelines and specific procedures will be introduced to ensure prompt decisions by the Upper Tribunal."
            },
            {
              "question": "How will this affect individuals facing removal?\n\n",
              "answer": "Individuals will have clear guidelines on how to submit their appeals and what information is required. The process will be more transparent, and decisions will be made within set timeframes, reducing uncertainty for those appealing their removal."
            }
          ],
          "parties": [
            {
              "party": "Conservative",
              "colour": "blue",
              "ayes": 133,
              "noes": 0
            },
            {
              "party": "Labour",
              "colour": "red",
              "ayes": 0,
              "noes": 0
            }
          ]
        },
        {
          "niceTitle": "Finance Act 2024: Tax Changes and Property Adjustments",
          "summary": "The Finance Act 2024 introduces new income tax rates, adjusts thresholds for child benefit charges, and modifies capital gains tax on property. It also abolishes multiple dwellings relief for Stamp Duty Land Tax (SDLT) and makes changes to the tax treatment of certain financial and property transactions.",
          "questions": [
            {
              "question": "What are the new income tax rates for the 2024-25 tax year?",
              "answer": "The basic rate is 20%.\nThe higher rate is 40%.\nThe additional rate is 45%.\n"
            },
            {
              "question": "How does the Act affect child benefit charges?",
              "answer": "The income thresholds for the high-income child benefit charge have increased to £60,000 and £80,000. This means families earning below these thresholds may now receive more child benefit without incurring additional tax charges."
            },
            {
              "question": "What changes are being made to property taxes?",
              "answer": "The higher capital gains tax rate for residential property gains is reduced to 24%.\nThe multiple dwellings relief for SDLT is abolished, impacting transactions involving multiple properties.\nFirst-time buyers' relief for SDLT now includes acquisitions of new leases on bare trust, making it easier for first-time buyers to qualify."
            }
          ],
          "parties": [
            {
              "party": "Conservative",
              "colour": "blue",
              "ayes": 211,
              "noes": 0
            },
            {
              "party": "Labour",
              "colour": "red",
              "ayes": 0,
              "noes": 0
            }
          ]
        },
        {
          "niceTitle": "High Speed Rail Expansion: West Midlands to Crewe",
          "summary": "This legislation authorizes the construction and maintenance of a new high-speed rail line (Phase 2a of High Speed 2) connecting the West Midlands to Crewe. It provides the necessary legal framework for land acquisition, environmental measures, and construction processes required to extend the high-speed rail network.",
          "questions": [
            {
              "question": "What is the main purpose of this legislation?",
              "answer": "The legislation enables the construction of a high-speed rail line from the West Midlands to Crewe, enhancing the UK's transportation network and reducing travel times between major cities."
            },
            {
              "question": "How will the construction affect local residents?",
              "answer": "There will be significant construction activity, which may cause temporary disruptions. The legislation includes measures to mitigate environmental impacts and provide compensation to affected landowners."
            },
            {
              "question": "What are the benefits of this new rail line?",
              "answer": "The new rail line will provide faster travel between the West Midlands and Crewe, improve connectivity, and support economic growth by making it easier for people to commute and for goods to be transported efficiently."
            }
          ],
          "parties": [
            {
              "party": "Conservative",
              "colour": "blue",
              "ayes": 222,
              "noes": 5
            },
            {
              "party": "Labour",
              "colour": "red",
              "ayes": 86,
              "noes": 0
            }
          ]
        },
        {
          "niceTitle": "Digital Market Competition and Consumer Protection Act 2024",
          "summary": "This legislation aims to regulate competition within digital markets, ensuring fair practices and protecting consumers. It grants the Competition and Markets Authority (CMA) the power to oversee large digital companies, imposing requirements to prevent unfair competition and promote transparency.",
          "questions": [
            {
              "question": "What is the main goal of this Act?",
              "answer": "The primary goal is to regulate large digital companies to ensure they don't engage in unfair practices that harm competition or consumers. This includes monitoring their behavior, imposing rules for fair conduct, and taking action if they abuse their market power.\n"
            },
            {
              "question": "How will this Act affect big digital companies?\n\n",
              "answer": "Big digital companies may be designated as having strategic market status (SMS), which subjects them to specific conduct requirements. These requirements aim to ensure fair trading, transparency, and prevent them from using their dominant position to stifle competition."
            },
            {
              "question": "",
              "answer": ""
            }
          ],
          "parties": [
            {
              "party": "Conservative",
              "colour": "blue",
              "ayes": 0,
              "noes": 259
            },
            {
              "party": "Labour",
              "colour": "red",
              "ayes": 164,
              "noes": 0
            }
          ]
        }
      ];
      

    return JSON.parse(dummyJson)
}

