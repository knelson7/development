Organization of components:
    my FilteredList component handles the logic for filtering and updating the state based on what filter is selected and 
    what sorting option is selected. DisplayList component displays the list elements and their respective information. For 
    each item that is supposed to be displayed based on the selected sorting and filter options, DisplayList displays 
    the name, gender, profession, and rating of the specific celebrity, along with an image and a button that allows you to 
    vote for that specific celebrity. Unfortunatley, I didn't get a chance to implement this voting button.

    Additionally, I have a displaydash which displays the Dashboard that tallies the votes per celebrity as well as the total 
    votes that have been cast. A user can vote for a celebrity or delete a vote. In each case, the current votes for a celebrity
    will be udpated as well as the total vote counter.



How data is passed down through components:
    data is passed through components using the state variable. The state variable is initialized as a dictionary in the constructor of the 
    component. Within that component, the state might then be updated based on what logic and functionality that component is responsible 
    for. If a state is changed, then the component will update the state. 



How the user trigger state changes:
    the user triggers state changes based on what buttons they press, what filters they select, and what sorting option they choose. 
    The dashboard displays the total amount of votes that the user has cast, as well as how many votes they have cast for each 
    individual celebrity. A user can then remove the votes cast by a celebrity by clicking the delete button, which will trigger 
    the specific celebrity's vote decrease by 1 and the total votes to be updated. 

    The user can filter the celebritites based on gender and profession. If a filter is selected, the state will update to only show the 
    celebrities who's profession and gender match the selected filter. Also, the user can sort the celebrities based on their fan rating.
    If highest to lowest is selected, then the state will changes such that the celebrities will be sorted in order of descending rating, 
    with the highest rated celebrity appearing first in the list
