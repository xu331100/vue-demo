<div class="layer">
    <img src="${ require ('../../assets/1.png') }" />
    <div>
        This is <%= name %> layer
        <% for (var i = 0;i < arr.length; i++) {%>
        <%= arr[i] %>
        <% } %>
    </div>
</div>