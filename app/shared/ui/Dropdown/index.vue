<template>
    <div>
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button">
            <span>
                Dropdown button
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                    d="M2.41469 5.03551L2.41467 5.03552L2.41749 5.03828L7.76749 10.2633L8.0015 10.4918L8.23442 10.2622L13.5844 4.98716L13.5844 4.98717L13.5861 4.98551C13.6809 4.89068 13.8199 4.89068 13.9147 4.98551C14.0092 5.08005 14.0095 5.21846 13.9155 5.31326C13.9152 5.31354 13.915 5.31382 13.9147 5.3141L8.16676 10.962L8.16676 10.962L8.16469 10.9641C8.06838 11.0604 8.02352 11.0665 8.00039 11.0665C7.94147 11.0665 7.89042 11.052 7.82064 10.9989L2.08526 5.36327C1.99127 5.26846 1.99154 5.13005 2.08609 5.03551C2.18092 4.94068 2.31986 4.94068 2.41469 5.03551Z"
                    fill="#6B7280" stroke="#6B7280" stroke-width="0.666667" />
            </svg>
        </button>

        <div id="dropdown"
            class="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                    <a href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                    <a href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                </li>
                <li>
                    <a href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                </li>
                <li>
                    <a href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign
                        out</a>
                </li>
            </ul>
        </div>

    </div>
</template>