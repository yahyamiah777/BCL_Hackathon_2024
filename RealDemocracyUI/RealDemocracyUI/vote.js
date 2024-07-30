class Vote{
    constructor(title, parties, summary, questions){
        this.title = title
        this.parties = parties
        this.summary = summary
        this.questions = questions

        
        this.processParties = function() {
            var totalAyes = 0;
            var totalNays = 0;
            console.log(`Processing parties for vote: ${this.title}`);
            this.parties.forEach(function(party) {
                //console.log(party.ayes)
                totalAyes += party.ayes;
                totalNays += party.nays;
            });

          //  console.log(totalAyes)
            //console.log(totalNays)
            this.totalAyes = totalAyes;
            this.totalNays = totalNays;
        };

        this.processParties();
    }


    stringify(){
        var ayes = "Ayes:\n"
        var nays = "Nays:\n"
        parties.array.forEach(element => {
            ayes += element.name() + " had " + element.ayes() + "(" + element.ayes/this.ayes + 
                "%) ayes for this vote\n"
            nays += element.name() + " had " + element.nays() + "(" + element.nays/this.nays + 
                "%) nays for this vote\n"
        });

        return ayes + nays
    }
    output(){
        const chartContainer = document.getElementById('chartContainer');
        {
            const bar = document.createElement('div');
            bar.classList.add('bar');
            chartContainer.appendChild(bar);

            this.parties.forEach((party) => {
                const section = document.createElement('div');
                section.classList.add('bar-section');
                section.style.width = party.ayes / this.totalAyes + '%'; // Set width based on value
                section.style.backgroundColor = party.color; // Set color
                bar.appendChild(section);
            });

            const label = document.createElement('div');
            label.classList.add('bar-label');
            label.textContent = 'Ayes'; // Replace with your own labels
            chartContainer.appendChild(label);
        }

        {
            const bar = document.createElement('div');
            bar.classList.add('bar');
            chartContainer.appendChild(bar);

            this.parties.forEach((party) => {
                const section = document.createElement('div');
                section.classList.add('bar-section');
                section.style.width = (party.nays / this.totalNays) + '%'; 
                section.style.backgroundColor = party.color; 
                bar.appendChild(section);
            });

            const label = document.createElement('div');
            label.classList.add('bar-label');
            label.textContent = 'Nays'; 
            chartContainer.appendChild(label);
        }
        this.showData()
    }

    showData(){
        const info = document.getElementById('sumContainer');
        info.textContent = this.summary;

        const ques = document.getElementById('questionContainer');
        var q = "";
        this.questions.forEach(q => {
            q += "Question: " + q.question + "?\n Answer: " + q.answer + "\n\n"
        });
        ques.textContent = q;
    }


    

}