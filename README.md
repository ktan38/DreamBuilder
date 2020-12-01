# DreamBuilder: Build Your Dream Basketball Starting 5

DreamBuilder is a tool that allows you to play GM, and build your basketball dream team using the best players in NBA history. You have $60 dollars to spend, and each player has an associated cost. Enjjoy!

## Application's Architecture

App.js is my parent component that contains a list of my 50 item cards, as well as a FilteredList. My list off cards is passed down to the FilteredList component.

FfilterdList is my component that contains all the logisc behind filtering, sorting, and aggregating. Its state contains the following:

        cost: indicates the state of the cost filter
        position: indicates the state of the position filter
        sort: indicates the state in which the cards are sorted
        total: indicates the total aggregated cost of the players added to "My Team"
        dict: a dictionary that maps players added to "My Team" to the amount added

FilteredList contains Dropdown components from Bootstrap that handle the Filtering and Sorting, respecively. These Dropdowns point directly to the ffiltering and sorting functions written within FilteredList.

FilteredList also contains a DisplayList component and a DisplayAdded component

DisplayList is my component for displaying the 50 cards, which can be sorted and filterd. Two things are passed down from FilteredList and used as props in DisplayList: the list of 50 cards, filtered and sorted, and an
"add" function. DisplayList contains all the details for how the card is structured and displayed. The reason why the add function is passed down here is because there is an add button on each card, for the user to add to their team.

    The Add to Team button triggers teh add property, which triggers the add function written in FilteredList, adding a player to the team

DisplayAdded is my component for displaying the cards in the user's team. The following properties are passed down from FilteredList:

        add: the add function that corresponds to the "plus" button
        subtract: a function that subtracts a player from the team, corresponding to the "minus" button
        remove: a function that removes a player from the team, regardless of how manny times the player has been added
        dict: a dictionary representing all the players currently on the user's team, and the number of times each player appears on the user's team
        list: a list of players filtered by whether they exist on the user's team
        total: the total cost of the player's team

These properties are all needed for this section of the website, where the different buttons, cards, and displays all correspond to functions written in the FilteredList class.

    The plus button triggers the add property, which triggers the add function written in FilteredList, adding a player to the team
    The minus button triggers the subtract property, which triggers the subtract function written in FilteredList, subtracting a player from the team
    The remove button triggers the remove property, which triggers the remove function written in FilteredList, removing a player entirely from the team
    Adding/subtracting/removing players from the user's team changes the total property, since it corresponds to a state in FilteredList that tracks the total cost of the user's team.
