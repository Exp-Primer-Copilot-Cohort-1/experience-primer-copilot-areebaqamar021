function skillsMember() {
    // Get the id of the member
    var id = $(this).data("id");
    // Get the current URL
    var currentURL = window.location.origin;
    // Send the user to the member's skills page
    window.location.href = currentURL + "/members/" + id + "/skills";
}