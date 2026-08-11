// searchData.js
const siteDatabase = [
    {
        title: "Bacon",
        category: "Character Descriptions",
        description: "A 17-year-old with True Narrative Transcendence, Internet Awareness, and fictionally unbound abilities.",
        url: "TheEndlessNarrative_Bacon.html"
    },
    {
        title: "Anti-Narrative",
        category: "Character Descriptions",
        description: "The physical manifestation of author's block. It eats stories and possesses Authorship Immunity.",
        url: "TheEndlessNarrative_AntiNarrative.html"
    },
    {
        title: "The Endless Narrative: Chapter 1",
        category: "Narrative/Stories",
        description: "The beginning of the unbound story where Bacon realizes he is in a text file.",
        url: "NarrativeName_Page1.html"
    }
];

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        searchResults.innerHTML = ''; 
        
        if (query.length === 0) {
            searchResults.style.display = 'none';
            return;
        }

        const filtered = siteDatabase.filter(item => 
            item.title.toLowerCase().includes(query) || 
            item.description.toLowerCase().includes(query)
        );

        if (filtered.length > 0) {
            searchResults.style.display = 'block';
            filtered.forEach(item => {
                const div = document.createElement('div');
                div.className = 'search-item';
                div.innerHTML = `
                    <strong>${item.title}</strong> <span style="font-size: 0.8em; color: gray;">[${item.category}]</span><br>
                    <small>${item.description}</small>
                `;
                div.onclick = () => window.location.href = item.url;
                searchResults.appendChild(div);
            });
        } else {
            searchResults.style.display = 'none';
        }
    });
}
