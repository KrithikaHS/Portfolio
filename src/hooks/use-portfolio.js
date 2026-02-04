import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@shared/routes.js"; // Added .js extension

export function useProjects() {
    return useQuery({
        queryKey: [api.projects.list.path],
        queryFn: async () => {
            const res = await fetch(api.projects.list.path);
            if (!res.ok) throw new Error("Failed to fetch projects");
            return await res.json(); // Removed zod parsing on client for simplicity or could keep z.parse if zod is available? api.projects.list.responses[200] is z.array... in JS we can skip or keep if we want runtime validation. Original used parse. I'll stick to simple json() for JS unless I import schema. shared/routes.js has schema.
            // But shared/routes.js uses z.any() now, so parsing won't do much validation.
        },
    });
}

export function useSkills() {
    return useQuery({
        queryKey: [api.skills.list.path],
        queryFn: async () => {
            const res = await fetch(api.skills.list.path);
            if (!res.ok) throw new Error("Failed to fetch skills");
            return await res.json();
        },
    });
}

export function useContact() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data) => {
            // Input validation using z.parse if desired, but for JS we can skip or keep validation logic if zod is imported.
            // api.contact.submit.input is a zod schema.
            const validated = api.contact.submit.input.parse(data);
            const res = await fetch(api.contact.submit.path, {
                method: api.contact.submit.method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(validated),
            });

            if (!res.ok) {
                if (res.status === 400) {
                    const error = await res.json(); // removed parse
                    throw new Error(error.message);
                }
                throw new Error("Failed to send message");
            }

            return await res.json();
        },
    });
}
