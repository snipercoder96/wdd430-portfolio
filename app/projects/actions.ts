'use server';

import { redirect } from 'next/navigation';
import { addProject, type Project } from '@/app/projects/lib/projects-db';

export async function createProject(formData: FormData) {

    const title = String(formData.get('title') ?? '').trim();
    const description = String(formData.get('description') ?? '').trim();
    const type = formData.get('type');
    const technologies = String(formData.get('technologies') ?? '')
        .split(',')
        .map((technology) => technology.trim())
        .filter(Boolean);
    const link = String(formData.get('link') ?? '').trim();

    if (!title || !description || (type !== 'opensource' && type !== 'school') || technologies.length === 0) {
        throw new Error('Title, description, type, and technologies are required.');
    }

    const project: Omit<Project, 'id'> = {
        title,
        description,
        type,
        technologies,
        ...(link ? { link } : {}),
    };

    addProject(project);
    redirect('/projects');
}