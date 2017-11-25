import os

bookSpider

# Each website you crawl is a separate project (folder)
def create_project_dir(directory):
	if not os.path.exists(directory):
		print('creating project'+ directory)
		os.makedirs(directory)

create_project_dir('bookSpider')
